import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount( { stock, initial, onAdd }  ){

    const[mostrar, setMostrar] = useState(true);

    const [cant, setCant] = useState(1);
    const [disponibilidad, setDisponibilidad] = useState(true);

    const modificarCantidad = (valor) =>{
        setCant(cant + valor);
    }
    
    const agregar = () => {
        onAdd(cant);
        setMostrar(false);
    }

    useEffect( () => { //Cada vez que cargo el componente verifico si hay disponibilidad de stock 
        if (stock === 0) {
            setDisponibilidad(false); 
            setMostrar(false)
        };
    },[]);

    if (mostrar){
        return(
            <div>
                <button type="button" className="btn btn-dark" onClick={ () => { modificarCantidad(-1) } }
                    disabled={ cant === initial }>-</button>
                <span className="tamanio_contador">{cant}</span>
                <button type="button" className="btn btn-dark" onClick={ () => { modificarCantidad(1) } }
                    disabled={ cant === stock }>+</button>
                <div className="py-2"><input className="btn btn-dark" type="button" value="Agregar al carrito" onClick={agregar}/></div>
            </div>
            
        );
    } else {
        return(
            <div>
                {disponibilidad ?
                    <Link className="py-2" to={'/Cart'}><input className="btn btn-dark" type="button" value="Finalizar Compra" /></Link>
                    : <div><p className="h6">Producto momentaneamente sin stock</p><Link to={'/'}><input className="btn btn-dark mx-2" type="button" value="Buscar productos" /></Link></div>}
                
            </div>
        )
    }
    
}

export default ItemCount;