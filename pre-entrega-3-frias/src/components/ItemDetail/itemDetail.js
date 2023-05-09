import ItemCount from "../ItemCount/itemCount";
import { useNavigate } from 'react-router-dom';

import "./itemDetail.css"

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="item-detail-container">
      <p className="item-detail__title">{item.title}</p>
      <img className="item-detail__image" src={item.pictureURL} alt="Book picture" />
      <p className="item-detail__description">{item.description}</p>
      <p className="item-detail__price">Precio: ${item.price}</p>
      <ItemCount item={item} initial={1}/>
      <p className="item-detail__stock">{`${item.stock} unidades disponibles. `}</p>
      <button className="btn" onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};


export default ItemDetail;