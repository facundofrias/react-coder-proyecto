import { useState, createContext, useEffect } from "react";
import { getCart } from "../Cart/getCart"

const initialValues = {
  itemsCartCounter: 0,
}
export const ItemsCartCounterContext = createContext(initialValues);

export const ItemsCartCounterProvider = ({ children }) => {
  const [itemsCartCounter, setItemsCartCounter] = useState(initialValues.itemsCartCounter);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getCart();
      setItemsCartCounter(ordersData.length);
    };
      
    fetchData();
      
    return () => clearTimeout(fetchData);
  }, []);

  const addItemToCart = () => {
    setItemsCartCounter(itemsCartCounter + 1);
  }

  const removeItemFromCart = () => {
    setItemsCartCounter(itemsCartCounter - 1);
  }

  return (
    <ItemsCartCounterContext.Provider 
      value={{ itemsCartCounter, addItemToCart, removeItemFromCart }}>
        {children}
    </ItemsCartCounterContext.Provider>
  )
}