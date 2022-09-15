import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

const Item = ( {title, price, pictureUrl, id} ) => {

    let destino = id + '';

    return(
        <Link to={'/item/'+ destino } style={{color: 'inherit', textDecoration: 'inherit'}} >
        <div className="card">
            <img src={pictureUrl} className="card-img-top " alt={title} />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center"><b>${price}</b></p>
            </div>
        </div>
        </Link>
    );
}

export default Item;