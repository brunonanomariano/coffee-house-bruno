import { useState } from "react";
import { Component } from "react";

function ItemCount( { stock, initial, onAdd, cantidad }  ){

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