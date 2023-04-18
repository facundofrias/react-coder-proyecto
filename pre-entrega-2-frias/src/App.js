// --- Imports ----
import logo from "./logo.svg";
import "./App.css";
// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/home";
import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import ItemList from "./components/ItemList/itemList";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import ItemListByCategory from "./components/ItemListByCategory/itemListByCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exat path="/" element={<Home />} />
          <Route exat path="/item-details/:itemId" element={<ItemDetailContainer />} />
          <Route exat path="/category/:categoryURL" element={<ItemListByCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
