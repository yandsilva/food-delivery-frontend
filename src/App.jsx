import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PalceOrder from "./pages/PlaceOrder/PalceOrder";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PalceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
