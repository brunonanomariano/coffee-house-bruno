import { getFirestore, addDoc, collection, doc, updateDoc, getDoc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import swal from "sweetalert";
import { clear } from "@testing-library/user-event/dist/clear";

const PurchaseForm = () => {

    const {cart, totalCompra, clear} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const sendOrder = () =>{
        const buyer = { name: nombre, phone: telefono, email: email};
        const items = [];
        cart.forEach( (item) => {
            items.push( {id: item.id, tittle: item.title, price: item.price} )
        })

        const order = {buyer: buyer, items: items, date: new Date(), total: totalCompra()};

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((data) => {
            swal({
                title: "Orden de compra realizada con exito",
                text: "Id de la compra: " + data.id,
                icon: "success",
                button: "Aceptar",
            }).then(function(){ //Una vez concluida la alerta redirijo a la home
                window.location.href = "/";
            });
        });

        cart.forEach( (item) => {
            const productDoc = doc(db, "productos", item.id);
            getDoc(productDoc)
                .then((producto) => {
                    updateDoc(productDoc, {stock: producto.data().stock - item.quantity});
                })
        });

        clear();

    }
    
    return <div className="container">
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreComprador" onInput={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label for="email" className="form-label">E-Mail</label>
                <input type="email" className="form-control" id="emailComprador" onInput={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="telefono" className="form-label">Telefono</label>
                <input type="tel" className="form-control" id="telComprador" onInput={(e) => setTelefono(e.target.value)}/>
            </div>
            <input type="buttom" className="btn btn-dark" value="Finalizar Compra" onClick={ ()=> {sendOrder()} } />
        </form>
    </div>
}

export default PurchaseForm