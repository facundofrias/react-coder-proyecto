import NavBar from "../NavBar/navbar";
import ItemListContainer from "../ItemListContainer/itemListContainer";
import ItemList from "../ItemList/itemList";

const Home = () => (
  <div className="main">
    <NavBar/>
    <ItemListContainer greetings="Te damos la bienvenida - Lista de productos"/>
  </div>
);

export default Home;
