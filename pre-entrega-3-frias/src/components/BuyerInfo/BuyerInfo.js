import "./buyerInfo.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { getCart } from "../Cart/getCart";
import { confirmPurchase } from "./confirmPurchase";
import {Link} from "react-router-dom";

const BuyerInfo = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect( () => {
    const fetchData = async () => {
      const cart = await getCart();
      setCartItems(cart);
      setIsLoading(false);
    }
    fetchData();
  },[]);

  const handleCheckout = (event) => {
    event.preventDefault();
    if (name && phone && email) {
      confirmPurchase(email, name, phone, cartItems);
    } else {
      Swal.fire('Por favor completa todos los campos.', '', 'warning');
    }
  }

  return (
    <>
      {
        isLoading ? (
          <div className="modal">
            <p>Cargando...</p>
          </div>
        ) : (
          <div className="buyer-info-container">
      {
        cartItems.length > 0 ? (
          <form className="buyer-info-form">
            <h4 className="buyer-info-title">Información de la compra</h4>
            <label className="buyer-info-label">
              Nombre:
              <input
                className="buyer-info-input"
                type="text"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <br />
            <label className="buyer-info-label">
              Teléfono:
              <input
                className="buyer-info-input"
                type="text"
                name="phone"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </label>
            <br />
            <label className="buyer-info-label">
              Email:
              <input
                className="buyer-info-input"
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <div className="buy-actions-container">
              <button className="btn btn-success" onClick={handleCheckout}>Confirmar compra</button>
              <button className="btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
          </form>
        ) : (
          <>
            <p>No hay productos en el carrito</p>
            <Link className="btn btn-primary" to={"/cart"}>Comprar Volver</Link>
          </>
        )
      }  
        </div>
            )
          }
    </>
  );
}

export default BuyerInfo;