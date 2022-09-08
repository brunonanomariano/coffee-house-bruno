import React from "react";
import { Component } from "react";

const Item = ( {title, price, pictureUrl} ) => {

    const imagen = pictureUrl;
    console.log(imagen);

    return(
        <div className="card">
            <img src={pictureUrl} className="card-img-top " alt={title} />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center"><b>${price}</b></p>
            </div>
        </div>
    );
}

export default Item;