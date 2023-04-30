import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/navbar";
import Item from "../Item/item";

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
  localStorage.setItem("prevURL", window.location.href);
  return (
    <div className="main">
      <NavBar/>
      {productsByCategory.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <h3>{`Categoría: ${productsByCategory[0].category}`}</h3>
          <h4>Productos:</h4>
          <div className="items-container">
            {productsByCategory.map((product) => (
              <Item
                id={product.id}
                pictureURL={product.pictureURL}
                title={product.title}
                stock={`Stock: ${product.stock}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListByCategory;