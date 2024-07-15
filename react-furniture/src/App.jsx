import React from "react";
import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Wrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Wrapper} />
    </Routes>
  );
};

export default App;
