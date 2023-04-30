import { useNavigate } from 'react-router-dom';

import "./item.css";

const Item = ({id, title, category, pictureURL, price, stock}) => {
  const navigate = useNavigate();

  const goToItemDetails = () => {
    navigate(`/item-details/${id}`);
  }
  return (
    <div className='item-container'>
      <p><strong>{title}</strong></p>
      <img className='picture' src={pictureURL} alt="Book picture" />
      <p><strong>Categoría: </strong>{category}</p>
      <p><strong>Stock: </strong>{stock}</p>
      <p><strong>Precio: </strong>${price}</p>
      <button onClick={goToItemDetails}>Ver detalles</button>
    </div>
  )
}

export default Item;