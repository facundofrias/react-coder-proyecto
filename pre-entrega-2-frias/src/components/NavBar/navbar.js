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
  
  const goToCategory = (categoryURL) => {
    navigate(`/category/${categoryURL}`);
  }
  
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
              <a href="">Ofertas</a>
              <a href="">Vender</a>
              <a href="">Ayuda</a>
              <CartWidget />
              <div className="categories-container">
                <a className="categories"
                onClick={showCategoriesMenu}>Categorías</a>
                { menuOpen && (
                  <ul className="categories-menu">
                    <li className="categories-item" onClick={() => goToCategory("ciencia_ficcion") }>Ciencia Fincción</li>
                    <li className="categories-item" onClick={() => goToCategory("fantasia") }>Fantasía</li>
                    <li className="categories-item" onClick={() => goToCategory("clasicos") }>Clásicos</li>
                    <li className="categories-item" onClick={() => goToCategory("infantil") }>Infantil</li>
                  </ul>
                  )
                }
              </div>
            </div>
          </div>
}

export default NavBar;