import React from "react";
import { Route, Routes } from "react-router";
import Incredient from "./Incredient";
import Nutrition from "./Nutrition";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<main.js />} />
      <Route path="/incredient/:id" element={<Incredient />} />
      <Route path="/nutrition/:id" element={<Nutrition />} />
    </Routes>
  );
};

export default AllRoutes;
