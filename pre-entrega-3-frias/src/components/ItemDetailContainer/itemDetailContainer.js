import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/navbar";
import useItem from "./useItem"

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const item = useItem(itemId);

  return (
    <div className="main">
    <NavBar/>
      <div className="item-datail-container">
        {item ? (
          <ItemDetail item={item}/>
        ) : (
          <p>Cargando item...</p>
        )}
      </div>
  </div>
  );  
}

export default ItemDetailContainer