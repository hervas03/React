
import logo from './logo.svg';
import './bootstrap.css';
import CardView from './Componentes/cardView';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import IMG1 from "../src/img/bicicleta1.png";
import IMG2 from "../src/img/bicicleta2.png";
import IMG3 from "../src/img/bicicleta3.png";
import Catalogo from './Componentes/Catalogo';
import Inicial from './Componentes/PaginaInicial';
import Carrito from './Componentes/Carrito';

function App() {
  const [precioTotal, SetPrecioTotal] = useState(0);
  const [precioTotalCarrito, SetPrecioTotalCarrito] = useState(0);

  function redondeo(precio) {
    return Number.parseFloat(precio).toFixed(2);
  }

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar bg-black p-4">
          <div className="container-fluid">
            <a className="navbar-brand text-light">2-T</a>
            <Link to="/" className="btn btn-outline-success text-light">Inicio</Link>
            <Link to="/shop" className="btn btn-outline-success text-light">shop</Link>
            <Link to="/carrito" className="btn btn-outline-success text-light">Carrito: {redondeo(precioTotal)} $</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Inicial/>} />
          <Route path='/shop' element={<Catalogo SetPrecioTotal={SetPrecioTotal} />} />
          <Route path='/carrito' element={<Carrito precio={precioTotal} setPrecioTotal={SetPrecioTotal}/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
