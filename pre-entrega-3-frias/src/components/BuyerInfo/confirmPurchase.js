import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseEcommerce/database";
import Swal from "sweetalert2";
import { decrementStock } from "./decrementStock";

export const confirmPurchase = async (email, name, phone, cartItems) => {
  const orderCollection = collection(db, "orders");
  let total = 0;
  
  for (let i = 0; i < cartItems.length; i++) {
    total += (parseFloat(cartItems[i].price)*parseFloat(cartItems[i].quantity));      
  }

  const order = {
    buyer: {name: name, phone: phone, email: email},
    items: cartItems,
    date: new Date(),
    total: total
  }

  try {
    await addDoc(orderCollection, order);
    for (let i = 0; i < cartItems.length; i++) {
      await decrementStock(cartItems[i].itemId, cartItems[i].quantity);
    }
    await Swal.fire("¡Se ha efectuado la compra!", "", "success");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  
}

