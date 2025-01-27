import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!inputSearch.trim()) {
      setError("Please enter a Pokémon name");
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputSearch.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokemon not found");
      }

      const data = await response.json();
      setError("");

      navigate("/SearchPokemonData", { state: { pokemon: data } });
    } catch (err) {
      setError("Pokemon not found. Please try again!");
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search-input-group">
        <input
          id="pokemon-name-search"
          type="text"
          placeholder="Enter Pokémon name..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search Pokémon
        </button>
      </div>

      {/* Display Error Message */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Search;
