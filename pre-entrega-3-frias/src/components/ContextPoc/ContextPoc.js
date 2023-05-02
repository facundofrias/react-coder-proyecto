import { useState, createContext } from "react";

const initialValues = {
  ordersCounter: 0,
}
export const OrdersCounterContext = createContext(initialValues);

export const OrdersCounterProvider = ({ children }) => {
  const [ordersCounter, setOrdersCounter] = useState(initialValues.ordersCounter);

  const addOrder = () => {
    setOrdersCounter(ordersCounter + 1);
  }

  return (
    <OrdersCounterContext.Provider 
      value={{ ordersCounter, addOrder }}>
        {children}
    </OrdersCounterContext.Provider>
  )
}