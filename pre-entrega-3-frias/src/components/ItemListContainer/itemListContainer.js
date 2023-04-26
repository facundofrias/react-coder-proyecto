import ItemList from "../ItemList/itemList";

const ItemListContainer = ({greetings}) => (
  <div className="item-list-containerm">
    <h2>{greetings}</h2>
    <ItemList/>
  </div>
);

export default ItemListContainer;