
import { useNavigate } from 'react-router-dom';
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const goHome= () => {
    navigate(`/`);
  }
  return (
    <div>
      <img src={item.pictureURL} alt="Book picture" />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <ItemCount stock={item.stock} initial={1}/>
      <button onClick={goHome}>Volver atrás</button>
      <p>{`${item.stock} unidades disponibles. `}</p>
    </div>
  );
};


export default ItemDetail;