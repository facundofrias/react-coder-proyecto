
import useCount from "./useCount";
import { useContext, useState } from "react";
import { OrdersCounterContext } from "../ContextPoc/ContextPoc";
import Swal from "sweetalert2";


const ItemCount = ({ item, initial }) => {
  const {counter, increment, decrement} = useCount(initial);
  const {addOrder} = useContext(OrdersCounterContext);
  const showAddOrderSuccessAlert = (text) => {
    Swal.fire({
      title: '¡Item agregado!',
      html: `${text.replace(/\n/g, '<br>')}`,
      icon: 'success'
    })
  }

  const handlerAddToCart = () => {
    addOrder();
    showAddOrderSuccessAlert(`${item.title}\nUnidades: ${counter}\nTotal: $${item.price * counter}`);
  }

  return (
      <div className = "item-coun-container">
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={() => increment(item.stock)}>+</button>
        <button onClick={handlerAddToCart}>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;