import { useState } from "react";
import { Component } from "react";

function ItemCount( { stock, initial, onAdd }  ){

    const [cantidad, setCantidad ] = useState(initial);

    function onAdd( valor ){
        setCantidad (cantidad + valor);
    }

    return(
        <div>
            <button type="button" className="btn btn-dark" onClick={ () => { onAdd(-1) } }
                disabled={ cantidad === initial }>-</button>
            <span className="tamanio_contador">{cantidad}</span>
            <button type="button" className="btn btn-dark" onClick={ () => { onAdd(1) } }
                disabled={ cantidad === stock }>+</button>
        </div>
    );
}

export default ItemCount;