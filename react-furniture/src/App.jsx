import React from "react";
import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Wrapper";
import Category from "./Components/Category/Category";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
const App = () => {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" Component={Wrapper} />
        <Route exact path="/collections/:name" element={<Category />} />
        <Route exact path="/products" element={<ProductDetails />} />
      </Routes>
      <div className="bottom-0 w-full h-[10rem]">
        <Footer />
      </div>
    </>
  );
};

export default App;
