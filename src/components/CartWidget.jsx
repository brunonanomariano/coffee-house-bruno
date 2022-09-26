import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";


const CartWidget = ( props ) =>{

    const {totalProductos, cart } = useContext(CartContext);

    const icono = props.icono;

    const cantidadItems = totalProductos();

    return(
        <Link className="nav-link color_cafe" to="/Cart"><img className="tamanio_icono" src={icono} />
        {cantidadItems || " "} {/* De no tener elementos en el carrito no mostrar numero en el icono */}
        </Link>
    )
};

export default CartWidget;