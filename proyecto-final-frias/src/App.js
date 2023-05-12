// --- Imports ----
import "./App.css";
import "./bootstrapBtns.css";

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemsCartCounterProvider } from "./components/ContextPoc/ContextPoc";

// Components
import Home from "./components/home";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import ItemListByCategory from "./components/ItemListByCategory/itemListByCategory";
import Cart from "./components/Cart/cart"
import NavBar from "./components/NavBar/navbar";
import BuyerInfo from "./components/BuyerInfo/BuyerInfo";

function App() {
  return (
      <div className="App">
        <ItemsCartCounterProvider>
          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route exat path="/" element={<Home />} />
              <Route exat path="/item-details/:itemId" element={<ItemDetailContainer />} />
              <Route exat path="/category/:categoryURL" element={<ItemListByCategory />} />
              <Route exat path="/cart" element={<Cart />} />
              <Route exat path="/buyer-info" element={<BuyerInfo />} />
            </Routes>
          </BrowserRouter>
        </ItemsCartCounterProvider> 
      </div>
  );
}

export default App;
