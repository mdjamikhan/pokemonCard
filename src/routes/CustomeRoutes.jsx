import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokidex from "../Pokidex/Pokidex";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function CustomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokidex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}
export default CustomeRoutes;
