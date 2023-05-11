import { db } from "../FirebaseEcommerce/database";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";


const updateCartItemQuantity = async (itemId, newQuantity) => {
  const cartCollection = collection(db, "cart");
  const queryObj = query(cartCollection, where("itemId", "==", itemId));
  const querySnapshot = await getDocs(queryObj); 
  const docRef = querySnapshot.docs[0].ref;
  await updateDoc(docRef, { quantity: newQuantity });
};

export default updateCartItemQuantity;