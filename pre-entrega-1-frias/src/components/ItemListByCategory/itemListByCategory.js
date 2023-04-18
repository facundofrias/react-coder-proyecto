import { useEffect, useState } from "react";
import Item from "../Item/item"

const ItemListByCategory = ( { category } ) => {
  category = "Infantil";
  const [products, setProducts] = useState([]);
  let productsByCategory = [];
  useEffect(() => {
    try {
      fetch("./products.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, []);
  products.map((product) => {
    product.category == category ? console.log("Valido") : console.log("NO valido");
   }
  )
}


export default ItemListByCategory;