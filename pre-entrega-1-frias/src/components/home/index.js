import NavBar from "../NavBar/navbar";
import ItemListContainer from "../ItemListContainer/itemListContainer";
import ItemList from "../ItemList/itemList";
import ItemListByCategory from "../ItemListByCategory/itemListByCategory";

const Home = () => (
  <div className="main">
    <NavBar/>
    {/* <ItemListContainer greetings="Te damos la bienvenida - Lista de productos"/> */}
    <ItemListByCategory />
  </div>
);

export default Home;
