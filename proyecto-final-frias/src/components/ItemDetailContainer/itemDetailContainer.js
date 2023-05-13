import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import useItem from "./useItem";
import Loader from "../Loader/loader";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const item = useItem(itemId);

  return (
    <div className="main">
      <div className="item-datail-container">
        {item ? (
          <ItemDetail item={item}/>
        ) : (
          <div className="modal">
            <Loader />
          </div>
        )}
      </div>
  </div>
  );  
}

export default ItemDetailContainer