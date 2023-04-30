import { useContext } from "react";
import { OrdersCounterContext } from "../ContextPoc/ContextPoc";

export const OrdersCounter = () => {
  const {ordersCounter} = useContext(OrdersCounterContext);
  return (
    <span className="orders-counter">{ordersCounter}</span>
  );
};
