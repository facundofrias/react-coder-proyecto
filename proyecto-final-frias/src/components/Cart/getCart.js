import { db } from "../FirebaseEcommerce/database";
import {getDocs, collection } from "firebase/firestore";

export const getCart = async () => {
  const cartCollection = collection(db, "cart");
  const cartDocsRef = await getDocs(cartCollection);
  const orderDocs = cartDocsRef.docs;
  const cart = orderDocs.map((doc) => {
    return { ...doc.data(), id: doc.id};
  })
  return cart;
}