import { db } from "../FirebaseEcommerce/database";
import { doc, getDoc } from 'firebase/firestore';

const getItemstock = async (itemId, newQuantity) => {
  const itemDoc = doc(db, "products", itemId);
  const itemData = await getDoc(itemDoc);
  const itemStock = itemData.data().stock;
  if (newQuantity > itemStock) {
    return false;
  } else {
    return true;
  }

}

export default getItemstock;