import React from "react";
import { Component, useEffect, useState } from "react";

const ItemDetail = ( {productoSeleccionado} ) => {

    const imagen = productoSeleccionado.pictureUrl;
    const titulo = productoSeleccionado.title;
    const precio = productoSeleccionado.price;
    const descripcion = productoSeleccionado.description;

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img src={imagen} className="card-img-top " alt={titulo} />
                        <div className="card-body">
                            <h4 className="card-title text-center">{titulo}</h4>
                            <p  className="card-text text-center">{descripcion}</p>
                            <h5 className="card-text text-center"><b>${precio}</b></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

}
export default ItemDetail;