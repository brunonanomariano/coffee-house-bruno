import React from "react";
import logo from "./images/logo1.jpg";

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid text-center bg-dark text-white">
                COFFEE HOUSE
            </div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#"><img src={logo} width="100"/></a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" href="#">CAFE</a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" href="#">TE</a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" href="#">CACAO</a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" href="#">ENDULZANTES</a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" href="#">CAFETERAS</a>
                </li>
                <li className="nav-item vertical">
                <a className="nav-link color_cafe" href="#">EXPENDEDORAS</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;