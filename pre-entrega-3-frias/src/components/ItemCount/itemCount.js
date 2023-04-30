
import useCount from "./useCount";
import { useContext, useState } from "react";
import { OrdersCounterContext } from "../ContextPoc/ContextPoc";


const ItemCount = ({ stock, initial }) => {
  const {counter, increment, decrement} = useCount(initial);
  const {addOrder} = useContext(OrdersCounterContext);
  const handlerAddToCart = () => {
    addOrder();
  }


  return (
      <div className = "item-coun-container">
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={() => increment(stock)}>+</button>
        <button onClick={handlerAddToCart}>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;