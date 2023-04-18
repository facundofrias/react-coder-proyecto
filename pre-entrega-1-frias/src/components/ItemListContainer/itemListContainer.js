import ItemList from "../ItemList/itemList";

const ItemListContainer = ({greetings}) => (
  <div>
    <h2>{greetings}</h2>
    <ItemList/>
  </div>
);

export default ItemListContainer;