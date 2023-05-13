import { db } from "../FirebaseEcommerce/database";
import { collection, getDocs, query, where, writeBatch } from "firebase/firestore";



const updateCartItemQuantity = async (itemId, newQuantity) => {
  const cartCollection = collection(db, "cart");
  const queryObj = query(cartCollection, where("itemId", "==", itemId));
  const querySnapshot = await getDocs(queryObj); 
  const docRef = querySnapshot.docs[0].ref;
  const batch = writeBatch(db);
  batch.update(docRef, { quantity: newQuantity });
  await batch.commit();
};

export default updateCartItemQuantity;