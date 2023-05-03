import { db } from "../FirebaseEcommerce/database";
import {getDocs, collection } from "firebase/firestore";

export const getCart = async () => {
  const ordersCollection = collection(db, "cart");
  const ordersDocsRef = await getDocs(ordersCollection);
  const orderDocs = ordersDocsRef.docs;
  const orders = orderDocs.map((doc) => {
    return { ...doc.data(), id: doc.id};
  })
  return orders;
}