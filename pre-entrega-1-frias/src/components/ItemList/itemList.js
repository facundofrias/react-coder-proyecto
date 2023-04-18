import { useEffect, useState } from "react";
import Item from "../Item/item"

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const fetchData = setTimeout(() => {
      
      fetch( "./products.json" )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));

    }, 2000);
    return () => clearTimeout(fetchData);
  }, []);

  return (
      <div>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                <Item 
                id={product.id}
                category={`Cat: ${product.category} `}
                pictureURL = {product.pictureURL}
                title = {product.title}
                stock = {`Stock: ${product.stock}`} />
              </li>
              )
            )
          }
        </ul>
      </div>
    )
}

export default ItemList;