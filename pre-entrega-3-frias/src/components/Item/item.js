import { useNavigate } from 'react-router-dom';

import "./item.css";

const Item = ({id, category, pictureURL, title, stock}) => {
  const navigate = useNavigate();

  const goToItemDetails = () => {
    navigate(`/item-details/${id}`);
  }
  return (
    <div className='item-container'>
      <p>{category}</p>
      <img className='picture' src={pictureURL} alt="Book picture" />
      <p>{title}</p>
      <button onClick={goToItemDetails}>Ver detalles</button>
      <p>{stock}</p>
    </div>
  )
}

export default Item;