// --- Imports ----
import logo from "./logo.svg";
import "./App.css";
// Components
import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import ItemCount from "./components/ItemCount/itemCount"
import ItemList from "./components/ItemList/itemList";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <ItemListContainer greetings="Te damos la bienvenida"/>
          {/* <ItemCount stock={5} initial={1}/> */}
          {/* <Item category={"Ficcion"} pictureURL={"https://picsum.photos/200/300/?image=1015"} title ={"Los tres mosqueteros"} stock={14}/> */}
          <ItemList/>
      </div>
    </div>
  );
}

export default App;
