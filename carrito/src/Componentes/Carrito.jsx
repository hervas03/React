
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";
//<div>Precio {precio}</div>

export default function Carrito({ precio, setPrecioTotal }) {
  const [precioTotal, setPrecioTotalCarrito] = useState(precio);

  const redondeo = (precio) => {
    return Number.parseFloat(precio).toFixed(2);
  };

  const eliminar = () => {
    setPrecioTotal(0);
    setPrecioTotalCarrito(0);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5">Checkout</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Resumen de la compra</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Precio:{" "}
                  <span className="float-end">{redondeo(precioTotal)} $</span>
                </li>
                <li className="list-group-item">
                  <button
                    className="btn btn-outline-danger text-dark float-end"
                    onClick={eliminar}
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Detalles del pago</h5>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" className="form-control" id="nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo electrónico</label>
                <input type="email" className="form-control" id="correo" />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección de envío</label>
                <textarea
                  className="form-control"
                  id="direccion"
                  rows="3"
                ></textarea>
              </div>
              <br></br>
              <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
