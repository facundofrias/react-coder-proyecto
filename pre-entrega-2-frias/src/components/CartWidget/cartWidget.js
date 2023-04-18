// Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// Carrito con valor numérico hardcodeado
const CartWidget = ({ cant }) => {
  cant = 3;
  return (
    <a href="">
    <FontAwesomeIcon icon={faCartShopping} />
      {cant}  
    </a>
  );
};

export default CartWidget;
