import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/itemCount";

const useItem = (itemId) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => { // Agregamos un timeout de 2 segundos
        try {
          const response = await fetch('/products.json', { timeout: 2000 });
          const data = await response.json();
          const foundItem = data.find(product => product.id == itemId);
          setItem(foundItem);
        } catch (error) {
          console.log('Error fetching data', error);
        }
      }, 2000);
    };
    fetchData();
  }, [itemId]);

  useEffect(() => {
    console.log('Item:', item);
  }, [item]);

  return item;
};


const ItemDetailContainer = ({ itemId }) => {
  const item = useItem(itemId);

  return (
    <div className="item-datail-container">
      {item ? (
        <div>
          <img src={item.pictureURL} alt="" />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{`Unidades disponibles: ${item.stock}`}</p>
          <ItemCount stock={item.stock} initial={1}/>
        </div>
      ) : (
        <p>Cargando item...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;