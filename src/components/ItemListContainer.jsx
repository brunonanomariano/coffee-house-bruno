import { Component } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ( props ) => {
    return(
        <div className="container-fluid gradiente_marron text-white">
            <div className="container">
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>
            <p>{ props.mensaje }</p>

            <ItemCount stock={5} initial={1} />
        
            </div>
        </div>
    )
}

export default ItemListContainer;