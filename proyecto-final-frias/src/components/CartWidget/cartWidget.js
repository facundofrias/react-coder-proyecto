// Imports
import "./cartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";
import { ItemsCartCounter } from "./ItemsCartCounter";

import cartImg from "../../assets/img/cart.svg";

// Carrito con valor numérico hardcodeado
const CartWidget = () => {
  return (
    <Link className="cart-icon" to="/cart">
      <img className="cart-img" src={cartImg} alt="" />
      { 
        <ItemsCartCounter/>
      }
    </Link>
  );
};

export default CartWidget;

