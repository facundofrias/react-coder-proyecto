// --- Imports ----
import logo from "./logo.svg";
import "./App.css";
// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrdersCounterProvider } from "./components/ContextPoc/ContextPoc";

// Components
import Home from "./components/home";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import ItemListByCategory from "./components/ItemListByCategory/itemListByCategory";
import Cart from "./components/Cart/cart"
import NavBar from "./components/NavBar/navbar";
import { useState } from "react";

function App() {
  return (
      <div className="App">
        <OrdersCounterProvider>
          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route exat path="/" element={<Home />} />
              <Route exat path="/item-details/:itemId" element={<ItemDetailContainer />} />
              <Route exat path="/category/:categoryURL" element={<ItemListByCategory />} />
              <Route exat path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </OrdersCounterProvider> 
      </div>
  );
}

export default App;
