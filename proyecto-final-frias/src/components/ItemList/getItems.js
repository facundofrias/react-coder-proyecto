import { db } from "../FirebaseEcommerce/database";
import {getDocs, collection } from "firebase/firestore";

export const getItems = async () => {
  const productsCollection = collection(db, "products");
  const productsDocsRef = await getDocs(productsCollection);
  const productDocs = productsDocsRef.docs;
  const products = productDocs.map((doc) => {
    return { ...doc.data(), id: doc.id};
  })
  return products;
}