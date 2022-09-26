import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { productos } from "./Catalogo.jsx";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

const ItemListContainer = ( props ) => {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    let array_category = [];

    const [cargando, setCargando] = useState(true);

    useEffect( () => {
        
        setCargando(true);

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });

        promesa.then((respuesta) => {
            if (id){
                array_category = respuesta.filter( productos => productos.category === id);
                setItems(array_category);
                setCargando(false);
            } else {
                setItems(respuesta);
                setCargando(false);
            }
            
        });
    }, [id]);

    //Se agrega un spinner de carga para mostrar mientras se resuelve la promesa
    if (cargando){
        return(
            <div className="posicion_loading">
                <Spinner color="primary" />
            </div>
        )
    } else {
        return(
            <div className="container">
                <ItemList items={items}/>        
            </div>
        )
    }
}

export default ItemListContainer;