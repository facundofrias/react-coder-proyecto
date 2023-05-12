import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseEcommerce/database";

export const decrementStock = async (productId, quantity) => {
  const productRef = doc(db, "products", productId);
  const productSnap = await getDoc(productRef);
  const stock = await productSnap.data().stock;
  const newStock = stock - quantity;
  await updateDoc(productRef, { stock: newStock });
};