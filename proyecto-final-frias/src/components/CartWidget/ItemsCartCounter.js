import { useContext } from "react";
import { ItemsCartCounterContext } from "../ContextPoc/ContextPoc";

export const ItemsCartCounter = () => {
  const {itemsCartCounter} = useContext(ItemsCartCounterContext);
  
  return (
    <span className="orders-counter">{itemsCartCounter}</span>
  );
};
