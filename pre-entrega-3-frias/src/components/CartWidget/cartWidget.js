// Imports
import "./cartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { CartCounter } from "./CartCounter";

// Carrito con valor numérico hardcodeado
const CartWidget = ({ cant }) => {
  
  return (
    <a className="cart-icon" href="">
    <FontAwesomeIcon icon={faCartShopping} />
    { cant > 0 && 
      <CartCounter>
        {itemCount}
      </CartCounter>
      }
    </a>
  );
};

export default CartWidget;

