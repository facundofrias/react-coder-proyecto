import ItemList from "../ItemList/itemList";
import "./itemListContainer.css";

const ItemListContainer = ({greetings}) => (
  <div className="item-list-container">
    <h2>{greetings}</h2>
    <div>
      <h3>Catálogo:</h3>
    </div>
    <ItemList/>
  </div>
);

export default ItemListContainer;