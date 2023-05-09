import ItemCount from "../ItemCount/itemCount";
import { useNavigate } from 'react-router-dom';

import "./itemDetail.css"

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="item-detail-container">
      <img src={item.pictureURL} alt="Book picture" />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount item={item} initial={1}/>
      <button onClick={() => navigate(-1)}>Volver</button>
      <p>{`${item.stock} unidades disponibles. `}</p>
    </div>
  );
};


export default ItemDetail;