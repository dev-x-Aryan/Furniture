import React from "react";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
const Home = () => {
  const content = (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  return content;
};

export default Home;
