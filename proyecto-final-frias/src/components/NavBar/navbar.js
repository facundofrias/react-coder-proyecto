import {Link} from "react-router-dom";
// Imports
import { useState } from "react";
// Estilos
import "./navbar.css";

import CartWidget from "../CartWidget/cartWidget";
// Imágenes
import logoImg from "../../assets/img/DigitalShop.png";

const NavBar = () => {
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
  
  const handleCategoriesMouseEnter = () => {
    setIsCategoriesHovered(true);
  };

  const handleCategoriesMouseLeave = () => {
    setIsCategoriesHovered(false);
  };
  
  return  <div className="navbar">
            <Link className="brand-container" to="/">
              <img className="logo" src={logoImg} alt="Logo" />
              <div className="brand-name-container">
                <span className="brand-name">Digital</span>
                <span className="brand-name">Books</span>
              </div>
            </Link>
            <div className="nav-menu">
              <div className="categories-container"
                  onMouseEnter={handleCategoriesMouseEnter}
                  onMouseLeave={handleCategoriesMouseLeave}
                  >
                <a className="categories menu-item">Categorías</a>
                {isCategoriesHovered && (
                  <div className="nav-categories">
                    <ul className="categories-menu">
                      <li><Link className="categories-item" to="/category/ciencia_ficcion">Ciencia Ficción</Link></li>
                      <li><Link className="categories-item" to="/category/fantasia">Fantasía</Link></li>
                      <li><Link className="categories-item" to="/category/clasicos">Clásicos</Link></li>
                      <li><Link className="categories-item" to="/category/infantil">Infantil</Link></li>
                    </ul>
                  </div>
                )}
              </div>
              <a className="menu-item" href="">Ofertas</a>
              <a className="menu-item" href="">Vender</a>
              <a className="menu-item" href="">Ayuda</a>
              <CartWidget />
            </div>
          </div>
}

export default NavBar;