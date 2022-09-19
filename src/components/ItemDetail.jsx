import React from "react";
import { Component, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ( {productoSeleccionado} ) => {

    const imagen = productoSeleccionado.pictureUrl;
    const titulo = productoSeleccionado.title;
    const precio = productoSeleccionado.price;
    const descripcion = productoSeleccionado.description;
    const stockDisponible = productoSeleccionado.stock;

    const [cantidad, setCantidad ] = useState(1);

    function onAdd( quantityToAdd ){
        setCantidad (cantidad + quantityToAdd );
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img src={imagen} className="card-img-top " alt={titulo} />
                        <div className="card-body">
                            <h4 className="card-title text-center">{titulo}</h4>
                            <p  className="card-text text-center">{descripcion}</p>
                            <p  className="card-text text-center h4"><b>${precio}</b></p>
                            <p  className="card-text text-center"><ItemCount stock={stockDisponible} initial={1} onAdd={onAdd} cantidad={cantidad} /></p>
                            <p className="card-text text-center"><Link to={'/cart'}><input className="btn btn-dark" type="button" value="Finalizar Compra" /></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

}
export default ItemDetail;