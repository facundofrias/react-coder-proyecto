import {Link} from "react-router-dom";
// Imports
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// Estilos
import "./navbar.css";

import CartWidget from "../CartWidget/cartWidget";
// Imágenes
import logoImg from "../../assets/img/DigitalShop.png";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const showCategoriesMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const navigate = useNavigate();
  
  const goHome = () => {
    navigate("/");
  }
  
  return  <div className="navbar">
            <a className="brand-container" onClick={goHome}>
              <img className="logo" src={logoImg} alt="Logo" />
              <div className="brand-name-container">
                <span className="brand-name">Digital</span>
                <span className="brand-name">Books</span>
              </div>
            </a>
            <div className="nav-menu">
              <a className="menu-item" href="">Ofertas</a>
              <a className="menu-item" href="">Vender</a>
              <a className="menu-item" href="">Ayuda</a>
              <CartWidget />
              <div className="categories-container">
                <a className="categories menu-item"
                onClick={showCategoriesMenu}>Categorías</a>
                { menuOpen && (
                  <ul className="categories-menu">
                    <li><Link className="categories-item" to="/category/ciencia_ficcion">Ciencia Ficción</Link></li>
                    <li><Link className="categories-item" to="/category/fantasia">Fantasía</Link></li>
                    <li><Link className="categories-item" to="/category/clasicos">Clásicos</Link></li>
                    <li><Link className="categories-item" to="/category/infantil">Infantil</Link></li>
                  </ul>
                  )
                }
              </div>
            </div>
          </div>
}

export default NavBar;