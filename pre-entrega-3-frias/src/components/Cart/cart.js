import { useEffect, useState } from "react";
import Order from "../Order/order"
import { getOrders } from "./getOrders";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getOrders();
      setOrders(ordersData);
      let total = 0;
      for (let i = 0; i < ordersData.length; i++) {
        total += parseFloat(ordersData[i].totalPrice);
      }
      setCartTotalPrice(total);
    };
      
    fetchData();
      
    return () => clearTimeout(fetchData);
  }, []);


  return (
    <div className="cart-container">
      <div className="orders-container">
        {
          orders.map((order) => (
            <Order 
            key={order.id}
            title={order.title}
            quantity={order.quantity}
            totalPrice={order.totalPrice}
            />
          )
          )
        }
        <p>{cartTotalPrice}</p>
      </div>
    </div>
  );
}

export default Cart;