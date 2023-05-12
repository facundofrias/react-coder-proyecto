import { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { ItemsCartCounterContext } from "../ContextPoc/ContextPoc";
import { getCart } from "./getCart";
import { db } from "../FirebaseEcommerce/database";
import { doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { cleanCart } from "./cleanCart";
import {Link} from "react-router-dom";
import emptyCartImg from "../../assets/img/empty-cart.png";
import Loader from "../Loader/loader";

import "./cart.css";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [numbreItems, setNumberItems] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const {removeItemFromCart, cleanItemCartCounter} = useContext(ItemsCartCounterContext);

  const handleDelete = async (id) => {
    const cartItemDoc = doc(db, "cart", id);
    try {
      await deleteDoc(cartItemDoc);
      setIsDeleted(true);
      removeItemFromCart();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleCleanCart = async () => {
    try {
      await cleanCart(cleanItemCartCounter);
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  

  const showCleanCartAlert = async () => {
    Swal.fire({
      title: '¿Realmente desea limpiar el carrito?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          handleCleanCart();
          Swal.fire('El carrito ha sido limpiado.', '', 'success');
        } catch (error) {
          console.error('Error eliminando documentos: ', error);
        }
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const cartData = await getCart();
      setCart(cartData);
      setNumberItems(cartData.length);
      let total = 0;
      for (let i = 0; i < cartData.length; i++) {
        total += (parseFloat(cartData[i].price)*parseFloat(cartData[i].quantity));
      }
      setCartTotalPrice(total);
      setIsLoading(false);
    };
      
    fetchData();
    return () => clearTimeout(fetchData);
  }, [isDeleted]);


  return (
    <>
      {isLoading ? (
        <div className="modal">
          <Loader />
        </div>
      ) : (
        <div className="cart-container">
          {numbreItems > 0 ? (
            <>
              <div className="items-cart-container">
                <div className="item-header">
                  <p className="header header-title">Título</p>
                  <p className="header">Unidades</p>
                  <p className="header">Precio</p>
                  <p className="header">Subtotal</p>
                  <p className="header">Acciones</p>
                </div>
                {cart.map((itemCart) => (
                  <ItemCart
                    key={itemCart.id}
                    id={itemCart.id}
                    title={itemCart.title}
                    quantity={itemCart.quantity}
                    price={`$${itemCart.price}`}
                    totalPrice={`$${itemCart.quantity*itemCart.price}`}
                    onDelete={() => handleDelete(itemCart.id)}
                  />
                ))}
              </div>
              <div className="total-price-container">
                <p>Total: ${cartTotalPrice}</p>
              </div>
              <div className="action-btns-container">
                <Link className="btn btn-primary" to={"/buyer-info"}>Comprar Carrito</Link>
                <button className="btn btn-danger" onClick={showCleanCartAlert}>Limpiar carrito</button>
              </div>
            </>
          ) : (
            <div className="empty-cart-container">
              <div className="empty-cart-text-container">
                <img className="empty-cart-image" src={emptyCartImg} alt="Empty cart image" />
                <h2>No hay productos en el carrito</h2>
                <h4>No tenés items en el carrito de compras.</h4>
              </div>
              <div className="empty-cart-button-container">
                <Link className="btn empty-cart-btn" to="/">Ver catálogo</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;