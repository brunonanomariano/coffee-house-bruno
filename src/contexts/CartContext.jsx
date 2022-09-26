import React from "react";
import { createContext } from "react";
import { Context } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    //Verifica si ya existe un producto en el carrito.
    // Retorna True de encontrase o False caso contrario
    const isInCart = (id) => {
        return cart.some( (producto) => producto.id === id);
    }

    //Agrega un nuevo item al carrito o actualiza la cantidad si ya se encuentra
    const addItem = (item, quantity) => {

        let newCart
        if (isInCart(item.id)){
            let productoActualizar = cart.find(producto => producto.id === item.id);
            productoActualizar.quantity += quantity;
            newCart = [...cart]
        } else{
            const producto = {...item, quantity};
            newCart = [...cart, producto];
        }
        setCart(newCart);
    }

    //Elimina un elemento del carrito de compras
    const removeItem = (itemId) => {
        const newCart = cart.filter( (producto) => producto.id !== itemId );
        setCart(newCart);
    }

    //Limpia el carrito de compras
    const clear = () => {
        setCart([]);
    } 

    //Muestro en consola el cart cada vez que se actualiza para chequear
    useEffect(() => {console.log(cart)},[cart]);

    //Calcula el total de la compra sumando el precio de todos los producto del carrito
    const totalCompra = () => {
        return cart.reduce( (acumulador, producto) => acumulador + producto.quantity * producto.price, 0 );
    }

    //Calcula el total de productos dentro del carrito sumando las cantidades de cada item
    const totalProductos = () => {
        return cart.reduce( (acumulador, item) => acumulador + item.quantity, 0 );
    }

    return <CartContext.Provider value={ {cart, isInCart, addItem, removeItem, clear, totalCompra, totalProductos } }>
        {children}
    </CartContext.Provider>
}

export default CartProvider;

