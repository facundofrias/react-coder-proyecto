import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Item from "../Item/item";
import Loader from "../Loader/loader";

import "./itemListByCategory.css";

import { getItems } from "../ItemList/getItems" ;


const ItemListByCategory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const {categoryURL} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getItems();
      setProducts(productsData);
      setIsLoading(false);
    };
  
    fetchData();
  
    return () => clearTimeout(fetchData);
  }, []);

  const productsByCategory = products.filter(
    (product) => product.categoryURL === categoryURL
  );
  
  return (
    <>
      {isLoading ? (
        <div className="modal">
          <Loader />
        </div>
      ) : (
        <>
          <h3 className="header-category">{`Categoría: ${productsByCategory[0].category}`}</h3>
            <div className="search-filter-container">
              <input className="search"
                type="text"
                placeholder="Buscar..."
                onChange={(e) =>setQuery(e.target.value)}
              />
            </div>
          <div className="items-container">
            {
              productsByCategory.filter(product=>product.title.toLowerCase().includes(query.toLowerCase())).
              map((product) => (
                <Item
                  id={product.id}
                  pictureURL={product.pictureURL}
                  title={product.title}
                  stock={product.stock}
                  price={product.price}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ItemListByCategory;