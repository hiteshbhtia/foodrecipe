// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Header from "./Header";
import React from "react";
import { Route, Routes } from "react-router";
import Incredient from "./Incredient";
import Nutrition from "./Nutrition";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/incredient/:id/:type" element={<Incredient />} />
        <Route path="/nutrition/:id/:type" element={<Nutrition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
