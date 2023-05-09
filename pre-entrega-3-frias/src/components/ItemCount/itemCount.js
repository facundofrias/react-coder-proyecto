
import useCount from "./useCount";
import { useContext } from "react";
import { ItemsCartCounterContext } from "../ContextPoc/ContextPoc";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseEcommerce/database";

import "./itemCount.css";


const ItemCount = ({ item, initial }) => {
  const {counter, increment, decrement} = useCount(initial);
  const {addItemToCart} = useContext(ItemsCartCounterContext);
  const showAddItemToCartSuccessAlert = (text) => {
    Swal.fire({
      title: '¡Item agregado!',
      html: `${text.replace(/\n/g, '<br>')}`,
      icon: 'success'
    })
  }

  const showAddItemErrorAlert = () => {
    Swal.fire({
      title: '¡Ocurrió un error!',
      html: 'No se pudo agregar el producto al carrito.',
      icon: 'error'
    })
  }

  const handlerAddToCart = async () => {
    const cartItem = {
      title: item.title,
      price: item.price,
      quantity: counter,
    };
    const cartCollection = collection(db, "cart");
    try {
      await addDoc(cartCollection, cartItem);
      showAddItemToCartSuccessAlert(
        `${item.title}\nUnidades: ${counter}\nTotal: $${item.price * counter}`
      );
      addItemToCart();
    } catch (error) {
      showAddItemErrorAlert();
      console.error("Error adding item to cart: ", error);
    }
  };

  return (
      <div className = "item-count-container">
        <button className="btn item-count__btn" onClick={decrement}>-</button>
        <span className="item-count__counter">{counter}</span>
        <button className="item-count__btn btn" onClick={() => increment(item.stock)}>+</button>
        <button className="item-count__add btn" onClick={handlerAddToCart}>
          Agregar al carrito
        </button>
      </div>
  )
}

export default ItemCount;