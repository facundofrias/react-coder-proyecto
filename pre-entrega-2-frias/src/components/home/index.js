import NavBar from "../NavBar/navbar";
import ItemListContainer from "../ItemListContainer/itemListContainer";

localStorage.setItem("prevURL", window.location.href);

const Home = () => (
  <div className="main">
    <NavBar/>
    <ItemListContainer greetings="Te damos la bienvenida - Lista de productos"/>
  </div>
);

export default Home;
