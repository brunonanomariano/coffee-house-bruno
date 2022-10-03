import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {

    const { cart, totalCompra } = useContext(CartContext);

    if ( cart.length ){
        return <div className="container">
                    { cart.map( item => <ItemCart key={item.id} producto={item} /> ) }
                    <p className="h3">Total: ${new Intl.NumberFormat('es-MX').format(totalCompra())}</p>
                    <Link to={'/purchaseForm'}><input className="btn btn-dark" type="button" value="Cerrar orden de compra" /></Link>
                </ div>
    } else {
        return <>
            <p>No hay productos en el carrito</p>
            <Link to={'/'}><input className="btn btn-dark mx-2" type="button" value="Buscar productos" /></Link>        
        </>
    }
    
}

export default Cart;