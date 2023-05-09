import { db } from "../FirebaseEcommerce/database";
import { collection , getDocs, deleteDoc} from "firebase/firestore";

export const cleanCart = async (callback) => {
  const cartRef = collection(db, 'cart');

  try {
    const querySnapshot = await getDocs(cartRef);
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
    callback();
  } catch (error) {
    console.error('Error eliminando documentos:', error);
  }
};