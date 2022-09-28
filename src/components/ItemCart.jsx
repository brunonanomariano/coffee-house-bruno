import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ItemCart = ( { producto } ) => {

    const { removeItem } = useContext(CartContext);

    return <div className="card mb-3 container item_cart" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={"/images/" + producto.pictureUrl} className="rounded-start tamanio_img_carrito" alt={producto.title} />
      </div>
      <div className="col-md-8">
        <div className="card-body ">
          <h4 className="card-title ">{producto.title}</h4>
          <p className="card-text h5 ">Cantidad: {producto.quantity}</p>
          <p className="card-text h5 ">Precio Unitario: ${new Intl.NumberFormat('es-MX').format(producto.price)}</p>
          <input className="btn btn-dark" type="button" value="Eliminar del carrito" onClick={()=> removeItem(producto.id)}/>
        </div>
      </div>
    </div>
  </div>
        
}

export default ItemCart;