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


    return <CartContext.Provider value={ {cart, isInCart, addItem, removeItem, clear } }>
        {children}
    </CartContext.Provider>
}

export default CartProvider;

