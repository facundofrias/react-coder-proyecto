import { useNavigate } from 'react-router-dom';
import ItemDetailContainer from "../ItemDetailContainer/itemDetailContainer";

const Item = ({id, category, pictureURL, title, stock}) => {
  const navigate = useNavigate();

  const goToItemDetails = () => {
    navigate(`/item-details/${id}`);
  }
  return (
    <div>
      <p>{category}</p>
      <img src={pictureURL} alt="Book picture" />
      <p>{title}</p>
      <button onClick={goToItemDetails}>Ver detalles</button>
      <p>{stock}</p>
    </div>
  )
}

export default Item;