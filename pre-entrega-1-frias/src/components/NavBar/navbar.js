// Imports
import { useState } from "react";
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
  return  <div className="navbar">
            <a className="brand-container" href="">
              <img className="logo" src={logoImg} alt="Logo" />
              <div className="brand-name-container">
                <span className="brand-name">Digital</span>
                <span className="brand-name">Books</span>
              </div>
            </a>
            <div className="nav-menu">
              <a href="">Ofertas</a>
              <a href="">Vender</a>
              <a href="">Ayuda</a>
              <CartWidget />
              <div className="categories-container">
                <a className="categories"
                onClick={showCategoriesMenu}>Categorías</a>
                { menuOpen && (
                  <ul className="categories-menu">
                    <li className="categories-item">Ciencia Fincción</li>
                    <li className="categories-item">Fantasía</li>
                    <li className="categories-item">Clásicos</li>
                    <li className="categories-item">Infantil</li>
                  </ul>
                 )
                }
              </div>
            </div>
          </div>
}

export default NavBar;