import React from "react";
import { Component, useEffect, useState } from "react";
import ItemList from "./ItemList";
import morenita from "./images/morenita.jpg";
import cabrales from "./images/cabrales.jpg";
import hispanos from "./images/5hispanos.jpg";
import hispanosGranos from "./images/5hispanos.jpg";
import hispanosExpresso from "./images/5hispanosexpreso.jpg";
import hispanosCrema from "./images/5hispanoscrema.jpg";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const productos = [
        {"id":1, "title":"Morenita en granos", "price":2334.04, "pictureUrl":morenita, "description":"Café espresso Durban Colombia, café en grano La Morenita 500g. Blend resultante de la combinación de granos de café arábigos originarios de la región. Ideal para cafeteras gastronómicas y de bar."},
        {"id":2, "title":"Cabrales expresso en granos", "price":2601.58, "pictureUrl":cabrales, "description":"Café en grano super cabrales oro visión (violeta), especial para cafeteras espresso de oficina, empresas y hogareñas.Logrado a partir de la mezcla en partes iguales de café natural y café lavado procedentes de Brasil o Colombia."},
        {"id":3, "title":"5Hispanos grano bourbon", "price":6243.02, "pictureUrl": hispanos, "description":"Café tostado natural en grano express cinco hispanos de 1kg, precio. Blend tradicional. Sabor delicado, profundo y pronunciado con un aroma fuerte y persistente. Para tomar solo o con leche."},
        {"id":4, "title":"5Hispanos tostado expresso", "price":5571.81, "pictureUrl":hispanosGranos, "description":"Café tostado natural en grano express cinco hispanos de 1kg, precio. Blend tradicional. Sabor delicado, profundo y pronunciado con un aroma fuerte y persistente. Para tomar solo o con leche."},
        {"id":5, "title":"5Hispanos expresso bolsa", "price":5171.44, "pictureUrl":hispanosExpresso, "description":"Café en grano espresso clásico 5 hispanos en bolsa de 1000g, especial para cafeteras expreso de oficina, hoteles y hogares.Logrado a partir de la mezcla en partes iguales de café tostado natural y café lavado procedentes de regiones como Brasil y/o Africanos."},
        {"id":6, "title":"5Hispanos santos crema", "price":6330.72, "pictureUrl":hispanosCrema, "description":"Café en grano santos crema clásico marca 5 hispanos, especial para cafeteras espresso de oficina, empresas y hogareñas. Logrado a partir de la mezcla de variedades de café tostado natural."},
    ];

    const [item,setItem] = useState({});

    useEffect( () => {

        const getItem = (id) => {
            return(productos.find( producto => producto.id === id ))
        };
      
        const promesa = new Promise((resolve) => {
            setTimeout( () => {
                resolve(getItem(5)) //Aca puedo setear por ID el item que quiera traer a detalles
                },2000)
        });

        promesa.then( (producto) => {
            setItem(producto);
        });
    },[]);

    return (
        <ItemDetail productoSeleccionado={item} />
    )
}

export default ItemDetailContainer;