import ItemDetail from "../ItemDetail/itemDetail";
import useItem from "./useItem"

const ItemDetailContainer = ({ itemId }) => {
  const item = useItem(itemId);

  return (
    <div className="item-datail-container">
      {item ? (
        <ItemDetail item={item}/>
      ) : (
        <p>Cargando item...</p>
      )}
    </div>
  );  
}

export default ItemDetailContainer