import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/navbar";
import Item from "../Item/item"


const ItemListByCategory = () => {
  const [products, setProducts] = useState([]);
  const {categoryURL} = useParams();

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data)
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }, 2000);
  }, []);

  const productsByCategory = products.filter(
    (product) => product.categoryURL === categoryURL
  );
  return (
    <div className="main">
    <NavBar/>
      <div>
        {productsByCategory.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div>
            {productsByCategory.map((product) => (
              <ul>
                <h3>{`Categoría: ${product.category}`}</h3>
                <h4>Productos:</h4>
                <li key={product.id}>
                  <Item
                    id={product.id}
                    pictureURL={product.pictureURL}
                    title={product.title}
                    stock={`Stock: ${product.stock}`}
                  />
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListByCategory;