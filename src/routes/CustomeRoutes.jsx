import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokidex from "../Pokidex/Pokidex";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import Search from "../Search/Search";
import SearchPokemonData from "../Search/SearchPokemonData";

function CustomeRoutes() {
  return (
    <Routes>
      <Route path="/Search" element={<Search />} />
      <Route path="/SearchPokemonData" element={<SearchPokemonData />} />
      <Route path="/" element={<Pokidex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}
export default CustomeRoutes;
