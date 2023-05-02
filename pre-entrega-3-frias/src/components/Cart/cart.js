import { useEffect, useState } from "react";
import Order from "../Order/order"
import { getCart } from "./getCart";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [numbreItems, setNumberItems] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    showSuccessAlert();
  };

  const showSuccessAlert = () => {
    alert("Compra exitosa");
  };

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getCart();
      setCart(ordersData);
      setNumberItems(ordersData.length);
      let total = 0;
      for (let i = 0; i < ordersData.length; i++) {
        total += parseFloat(ordersData[i].totalPrice);
      }
      setCartTotalPrice(total);
      setIsLoading(false);
    };
      
    fetchData();
      
    return () => clearTimeout(fetchData);
  }, []);


  return (
    <>
      {isLoading ? (
        <div className="modal">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="cart-container">
          {numbreItems > 0 ? (
            <div className="orders-container">
              {cart.map((order) => (
                <Order
                  key={order.id}
                  title={order.title}
                  quantity={order.quantity}
                  totalPrice={order.totalPrice}
                />
              ))}
              <p>Total: ${cartTotalPrice}</p>
              <p>Información del Cliente</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Teléfono:</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit">Comprar Carrito</button>
                <button>Limpiar carrito</button>
              </form>
            </div>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;