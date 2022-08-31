import { Component } from "react";

const CartWidget = ( props ) =>{

    const icono = props.icono;

    return(
        <a className="nav-link color_cafe" href="#"><img className="tamanio_icono" src={icono} /></a>
    )
};

export default CartWidget;