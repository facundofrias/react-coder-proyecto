import { useEffect, useState } from "react";
import Item from "../Item/item"

// Estilos
import "./itemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const fetchData = setTimeout(() => {
      
      fetch( "./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));

    }, 2000);
    return () => clearTimeout(fetchData);
  }, []);

  return (
      <div className="items-container">
        {
          products.map((product) => (
            <Item 
            id={product.id}
            category={`Categoría: ${product.category} `}
            pictureURL = {product.pictureURL}
            title = {product.title}
            stock = {`Stock: ${product.stock}`} />
            )
          )
        }
      </div>
    )
}

export default ItemList;