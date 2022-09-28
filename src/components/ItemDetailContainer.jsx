import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item,setItem] = useState({});
    const [cargando, setCargando] = useState(true);

    const {id} = useParams();

    useEffect( () => {

        setCargando(true);
        const db = getFirestore();
        const response = doc(db, "productos", id);
        getDoc(response)
            .then((producto) => {
                setItem({id: producto.id, ...producto.data()})
                setCargando(false);
            });
    },[id]);

    if (cargando){
        return(
            <div className="posicion_loading">
                <Spinner color="primary" />
            </div>
        )
    } else {
    return (
        <ItemDetail productoSeleccionado={item} />
    )
    }
}

export default ItemDetailContainer;