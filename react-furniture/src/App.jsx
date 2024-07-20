import React from "react";
import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Wrapper";
<<<<<<< HEAD
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
=======
import Category from "./Components/Category/Category"
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
>>>>>>> origin/test-aryan

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" Component={Wrapper} />
        <Route path="/collections/:name" Component={ProductDetails} />
      </Routes>
      <div className="bottom-0 w-full h-[10rem]">
        <Footer />
      </div>
    </>
=======
      <Route exact path="/" Component={Wrapper} />
      <Route exact path="/collections" element={<Category />} />
    </Routes>
      {/* <div className="bottom-0 w-full h-[10rem]">
        <Footer />
      </div> */}
    </>
    
>>>>>>> origin/test-aryan
  );
};

export default App;
