
import useCount from "./useCount";
import { useContext } from "react";
import { ItemsCartCounterContext } from "../ContextPoc/ContextPoc";
import Swal from "sweetalert2";
import { addDoc, collection, getDocs} from "firebase/firestore";
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
      itemId: item.id,
      price: item.price,
      quantity: counter,
      title: item.title,
    };
    const cartCollection =  collection(db, "cart");
    const cartItems = await getDocs(cartCollection);
    const numberOfCartItems = cartItems.size;
    try {
      if (numberOfCartItems > 0) {
        for (const doc of cartItems.docs) {
          if (doc.data().itemId == item.id) {
            console.log("llegaaa");
            break;
          }
        }
      } else {
        await addDoc(cartCollection, cartItem);
      }
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