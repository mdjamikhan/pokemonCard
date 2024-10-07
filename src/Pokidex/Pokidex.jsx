import React from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import "./Pokidex.css";

function Pokidex() {
  return (
    <div>
      <div className="pokidex-wrapper">
        <Search />
        <PokemonList />
      </div>
    </div>
  );
}
export default Pokidex;
