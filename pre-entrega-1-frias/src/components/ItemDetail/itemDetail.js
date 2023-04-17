
import useItem from "../ItemDetailContainer/useItem";
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({ item }) => {

  return (
    <div>
      <img src={item.pictureURL} alt="Book picture" />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{`Unidades disponibles: ${item.stock}`}</p>
      <ItemCount stock={item.stock} initial={1}/>
    </div>
  );
};


export default ItemDetail;