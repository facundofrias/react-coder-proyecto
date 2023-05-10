import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseEcommerce/database";
import Swal from "sweetalert2";
import { decrementStock } from "./decrementStock";

export const confirmPurchase = (email, name, phone, cartItems) => {
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
  const orderCollection = collection(db, "orders");
  addDoc(orderCollection, order)
    .then(() => {
      cartItems.forEach((item) => {
        decrementStock(item.itemId, item.quantity);
      });
      Swal.fire('Se ha efectuado la compra!.', '', 'success');
  });
}
