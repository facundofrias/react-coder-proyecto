// Imports
import "./cartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";
import { ItemsCartCounter } from "./ItemsCartCounter";

// Carrito con valor numérico hardcodeado
const CartWidget = () => {
  return (
    <Link className="menu-item cart-icon" to="/cart">
      <FontAwesomeIcon icon={faCartShopping} />
      { 
        <ItemsCartCounter/>
      }
    </Link>
  );
};

export default CartWidget;

