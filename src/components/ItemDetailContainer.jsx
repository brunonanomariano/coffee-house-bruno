import React from "react";
import { Component, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./Catalogo.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});
    
    const {id} = useParams();

    useEffect( () => {

        const getItem = (id) => {
            return(productos.find( producto => producto.id === parseInt(id) ))
        };
      
        const promesa = new Promise((resolve) => {
            setTimeout( () => {
                resolve(getItem(parseInt(id))) //Aca puedo setear por ID el item que quiera traer a detalles
                },2000)
        });

        promesa.then( (producto) => {
            setItem(producto);
        });
    },[id]);

    return (
        <ItemDetail productoSeleccionado={item} />
    )
}

export default ItemDetailContainer;