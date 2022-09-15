import React from "react";
import CartWidget from "./CartWidget";
import logo1 from "./images/logo1.jpg";
import cartIcon from "./images/cart.png";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <div>
            <div className="container-fluid text-center bg-dark text-white">
                COFFEE HOUSE
            </div>         
            <ul className="nav justify-content-center borde_navegacion">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/'}><img src={logo1} width="100"/></Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" aria-current="page" to={'/'}>HOME</Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" to={'/category/cafe'}>CAFE</Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" to={'/category/te'}>TE</Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" to={'/category/cacao'}>CACAO</Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" to={'/category/endulzantes'}>ENDULZANTES</Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" to={'/category/cafeteras'}>CAFETERAS</Link>
                </li>
                <li className="nav-item vertical">
                <Link className="nav-link color_cafe" to={'/category/expendedoras'}>EXPENDEDORAS</Link>
                </li>
                <li className="nav-item vertical">

                <CartWidget icono={cartIcon} />
                
                </li>
            </ul>
        </div>
    )
}

export default NavBar;