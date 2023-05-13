import { useEffect, useState } from "react";
import Item from "../Item/item";
import { getItems } from "./getItems";
import Loader from "../Loader/loader";

// Estilos
import "./itemList.css";


const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    const productsData = await getItems();
    setProducts(productsData);
    setIsLoading(false);
  };

  fetchData();

  return () => clearTimeout(fetchData);
}, []);

  return (
    <>
      { isLoading ? (
        <div className="modal">
          <Loader />
        </div>
        ) : (
          <>
            <div className="search-filter-container">
              <input className="search"
                type="text"
                placeholder="Buscar..."
                onChange={(e) =>setQuery(e.target.value)}
              />
            </div>
            <div className="items-container">
              {
                products.filter(product=>product.title.toLowerCase().includes(query.toLowerCase())).
                map((product) => (
                  <Item 
                  key={product.id} 
                  id={product.id}
                  title = {product.title}
                  category={product.category}
                  pictureURL = {product.pictureURL}
                  price = {product.price}
                  stock = {product.stock} />
                  )
                )
              }
            </div>
          </>
        )
      }
    </>
    )
}


export default ItemList;