// --- Imports ----
import logo from "./logo.svg";
import "./App.css";
// Components
import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <ItemListContainer />
          <h2>Te damos la bienvenida</h2>
      </div>
    </div>
  );
}

export default App;
