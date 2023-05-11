import "./buyerInfo.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { getCart } from "../Cart/getCart";
import {confirmPurchase} from "./confirmPurchase";
import {Link} from "react-router-dom";
import { cleanCart } from "../Cart/cleanCart";
import { useContext } from "react";
import { ItemsCartCounterContext } from "../ContextPoc/ContextPoc";

const BuyerInfo = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const {cleanItemCartCounter} = useContext(ItemsCartCounterContext);

  useEffect( () => {
    const fetchData = async () => {
      const cart = await getCart();
      setCartItems(cart);
      setIsLoading(false);
    }
    fetchData();
    return () => clearTimeout(fetchData);
  },[]);

  const handleCleanCart = async () => {
    try {
      await cleanCart(cleanItemCartCounter);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleCheckout = async (event) => {
    event.preventDefault();
    if (name && phone && email) {
      try {
        await confirmPurchase(email, name, phone, cartItems);
        await handleCleanCart();
        navigate("/");
      } catch (error) {
        console.error(error);
        Swal.fire('Hubo un error al procesar la compra.', '', 'error');
      }
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
              <Link className="btn btn-primary"  to={"/cart"}>Volver</Link>
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