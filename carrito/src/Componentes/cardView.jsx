
import React, { useState } from "react";
import "../bootstrap.css";
import IMG1 from "../img/bicicleta1.png";
import IMG2 from "../img/bicicleta2.png";
import IMG3 from "../img/bicicleta3.png";

function CardView({ img, nombre, descripcion, precio, setPrecioTotal }) {
  const [cantidad, SetCantidad] = useState(0);
  const modificarCantidad = (e) => {
    SetCantidad(e.target.value);
  };
  const anadirCantidad = () =>{
    if (cantidad >= 0) {
      setPrecioTotal((total) => total + precio*cantidad);
      SetCantidad(0);
    } else {
      SetCantidad(0);
    }
}
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="img-thumbnail" alt="" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <div className="card-text">
            {descripcion}
            <div className="fs-4">{precio} $</div>
          </div>
          <div className="card-footer">
            <input type="number" value={cantidad} onChange={modificarCantidad} className="p-2" />
            <button className="btn btn-danger p-1 ms-4" onClick={anadirCantidad}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
