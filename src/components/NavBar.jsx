import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => { 
    return (
        <div className="cajanav">
        <nav className="navmenu">
            <Link to="/"><img class="logo" src="logo1.png" alt="" /></Link>
            <ul class="ulBarra">
                <li> <a href="https://www.moovbydexter.com.ar/zapatillas"> ZAPATILLAS </a>  </li>
                <li> <a href="https://www.moovbydexter.com.ar/mujer/indumentaria/remeras"> REMERAS </a>  </li>
                <li><Link to="/categoria/pantalon">PANTALONES</Link></li>
                <li><Link to="/categoria/buzo">BUZOS</Link></li>
            </ul>
            <CartWidget />
        </nav>
        </div>
    )
}



export default NavBar;