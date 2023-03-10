
import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Receipe from "./Recipe";
import Searched from "./Searched";

function Pages() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Receipe />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
    // </AnimatePresence>
  );
}

export default Pages;
