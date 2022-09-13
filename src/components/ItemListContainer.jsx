import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Component } from "react";
import ItemList from "./ItemList";
import morenita from "./images/morenita.jpg";
import cabrales from "./images/cabrales.jpg";
import hispanos from "./images/5hispanos.jpg";
import hispanosGranos from "./images/5hispanos.jpg";
import hispanosExpresso from "./images/5hispanosexpreso.jpg";
import hispanosCrema from "./images/5hispanoscrema.jpg";

const ItemListContainer = ( props ) => {

    const [items, setItems] = useState([]);

    const productos = [
        {"id":1, "title":"Morenita en granos", "price":2334.04, "pictureUrl":morenita},
        {"id":2, "title":"Cabrales expresso en granos", "price":2601.58, "pictureUrl":cabrales},
        {"id":3, "title":"5Hispanos grano bourbon", "price":6243.02, "pictureUrl": hispanos},
        {"id":4, "title":"5Hispanos tostado expresso", "price":5571.81, "pictureUrl":hispanosGranos},
        {"id":5, "title":"5Hispanos expresso bolsa", "price":5171.44, "pictureUrl":hispanosExpresso},
        {"id":6, "title":"5Hispanos santos crema", "price":6330.72, "pictureUrl":hispanosCrema},
    ];

    useEffect( () => {
    
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return(
        <div className="container">
            <ItemList items={items}/>        
        </div>
    )
}

export default ItemListContainer;