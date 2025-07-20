import React from "react";
import Navbar from "../components";
import { Routes, Route } from "react-router-dom";
import Favorites from "../pages/favorites";
import Details from "../pages/details";
import Home from "../pages/home";

const Appp = () => {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default Appp;
