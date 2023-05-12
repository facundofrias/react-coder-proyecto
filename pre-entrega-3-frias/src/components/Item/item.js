import { useNavigate, useLocation } from 'react-router-dom';

import "./item.css";

const Item = ({id, title, category, pictureURL, price, stock}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToItemDetails = () => {
    navigate(`/item-details/${id}`);
  }

  let showCategory = true;
  if(location.pathname.includes("category")) {
    showCategory = false;
  } 

  return (
    <div className='item-container'>
      <p className='title'><strong>{title}</strong></p>
      <img className='picture' src={pictureURL} alt="Book picture" />
      {showCategory && <p><strong>Categoría: </strong>{category}</p>}
      <p><strong>Stock: </strong>{stock}</p>
      <p><strong>Precio: </strong>${price}</p>
      <button className='btn btn-primary' onClick={goToItemDetails}>Ver detalles</button>
    </div>
  )
}

export default Item;