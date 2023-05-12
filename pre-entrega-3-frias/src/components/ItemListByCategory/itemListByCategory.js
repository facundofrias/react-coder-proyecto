import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Item from "../Item/item";

import "./itemListByCategory.css";

import { getItems } from "../ItemList/getItems" ;


const ItemListByCategory = () => {
  const [products, setProducts] = useState([]);
  const {categoryURL} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getItems();
      setProducts(productsData);
    };
  
    fetchData();
  
    return () => clearTimeout(fetchData);
  }, []);

  const productsByCategory = products.filter(
    (product) => product.categoryURL === categoryURL
  );
  
  return (
    <div className="main">
      {productsByCategory.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <h3 className="header-category">{`Categoría: ${productsByCategory[0].category}`}</h3>
          <div className="items-container">
            {productsByCategory.map((product) => (
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
    </div>
  );
};

export default ItemListByCategory;