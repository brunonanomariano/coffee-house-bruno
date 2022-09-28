import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import {getFirestore, collection, query, getDocs, where} from 'firebase/firestore';


const ItemListContainer = ( props ) => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    const [cargando, setCargando] = useState(true);

    useEffect( () => {

        setCargando(true);

        const db = getFirestore();
        const itemCollection = collection(db, 'productos');
        const itemQuery = id ? query(itemCollection, where("category", "==", id)) : itemCollection;
        getDocs(itemQuery)
            .then(resp => {
                setItems(resp.docs.map(producto => ({id: producto.id, ...producto.data()})))
                setCargando(false);
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