import ItemCount from "../ItemCount/itemCount";
import { Link } from 'react-router-dom';

import "./itemDetail.css"

const ItemDetail = ({ item }) => {

  return (
    <div className="item-detail-container">
      <img src={item.pictureURL} alt="Book picture" />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount stock={item.stock} initial={1}/>
      <button>
        <Link to={localStorage.getItem("prevURL")}>Volver</Link>
      </button>
      <p>{`${item.stock} unidades disponibles. `}</p>
    </div>
  );
};


export default ItemDetail;