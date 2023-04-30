// Imports
import "./cartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";
import { OrdersCounter as OrdersCounter } from "./OrdersCounter";
import { useState } from "react";

// Carrito con valor numérico hardcodeado
const CartWidget = () => {
  const [cant, setCant] = useState(0);

  return (
    <Link className="cart-icon" to="/cart">
    <FontAwesomeIcon icon={faCartShopping} />
    { 
      <OrdersCounter>
        {cant}
      </OrdersCounter>
      }
    </Link>
  );
};

export default CartWidget;

