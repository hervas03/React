
import CardView from '../Componentes/cardView'
import IMG1 from "../img/bicicleta1.png";
import IMG2 from "../img/bicicleta2.png";
import IMG3 from "../img/bicicleta3.png";  
import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

function Catalogo({SetPrecioTotal}){
    return(        
        <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <CardView setPrecioTotal={SetPrecioTotal} img={IMG1} precio={12.99} nombre=' Bicicleta 1' descripcion='descripcion Bicicleta 1' />
        <CardView setPrecioTotal={SetPrecioTotal} img={IMG2} precio={32.99} nombre=' Bicicleta 2' descripcion='descripcion Bicicleta 2' />
        <CardView setPrecioTotal={SetPrecioTotal} img={IMG3} precio={13.99} nombre=' Bicicleta 3' descripcion='descripcion Bicicleta 3' />
        <CardView setPrecioTotal={SetPrecioTotal} img={IMG1} precio={22.99} nombre=' Bicicleta 4' descripcion='descripcion Bicicleta 4' />
        <CardView setPrecioTotal={SetPrecioTotal} img={IMG2} precio={16.99} nombre=' Bicicleta 5' descripcion='descripcion Bicicleta 5' />
        <CardView setPrecioTotal={SetPrecioTotal} img={IMG3} precio={92.99} nombre=' Bicicleta 6' descripcion='descripcion Bicicleta 6' />
        </div>
    )
}

export default Catalogo;