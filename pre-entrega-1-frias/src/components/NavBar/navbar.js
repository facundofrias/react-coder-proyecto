// Imports

// Estilos
import "./navbar.css";

import CartWidget from "../CartWidget/cartWidget";
// Imágenes
import logoImg from "../../assets/img/DigitalShop.png";
const NavBar = () => {

  return  <div className="navbar">
            <a className="brand-container" href="">
              <img className="logo" src={logoImg} alt="Logo" />
              <div className="brand-name-container">
                <span className="brand-name">Digital</span>
                <span className="brand-name">Books</span>
              </div>
            </a>
            <div className="categories">
              <a href="">Categorías</a>
              <a href="">Ofertas</a>
              <a href="">Vender</a>
              <a href="">Ayuda</a>
              <CartWidget />
            </div>
          </div>
}

export default NavBar;