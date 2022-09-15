import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Component } from "react";
import ItemList from "./ItemList";
import { productos } from "./Catalogo.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ( props ) => {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    let array_category = [];

    useEffect( () => {
    
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });

        promesa.then((respuesta) => {
            if (id){
                array_category = respuesta.filter( productos => productos.category === id);
                setItems(array_category);
            } else {
                setItems(respuesta);
            }
            
        });
    }, [id]);

    return(
        <div className="container">
            <ItemList items={items}/>        
        </div>
    )
}

export default ItemListContainer;