import React from "react";
import { Link } from "react-router-dom";

const Item = ( {title, price, pictureUrl, id} ) => {

    let destino = id + '';

    return(
        <Link to={'/item/'+ destino } style={{color: 'inherit', textDecoration: 'inherit'}} >
        <div className="card">
            <img src={"/images/" + pictureUrl} className="card-img-top " alt={title} />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center h4"><b>${new Intl.NumberFormat('es-MX').format(price)}</b></p>
            </div>
        </div>
        </Link>
    );
}

export default Item;