import React from "react";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
const Home = () => {
  const content = (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div>
        <Content />
      </div>
      <div className="bottom-0 w-full h-[10rem]">
        <Footer />
      </div>
    </div>
  );
  return content;
};

export default Home;
