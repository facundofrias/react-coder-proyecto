import useCount from "./useCount";
import onAdd from "./onAdd";

const ItemCount = ({stock, initial}) => {

  const {counter, increment, decrement} = useCount(initial);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={() => increment(stock)}>+</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;