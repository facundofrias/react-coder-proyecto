import useCount from "./useCount";
import { useState } from "react";

const ItemCount = ({stock, initial}) => {
  const {counter, increment, decrement} = useCount(initial);

  const [itemCount, setItemCount] = useState(0);

  const onClickHandler = () => {
    setItemCount(itemCount + counter);
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={() => increment(stock)}>+</button>
      <button onClick={() => onClickHandler(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;