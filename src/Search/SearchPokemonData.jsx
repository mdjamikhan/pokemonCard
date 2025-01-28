import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPokemonData.css";

function SearchPokemonData() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pokemon } = location.state || {};

  if (!pokemon) {
    navigate("/");
    return null;
  }

  // Function to format the list of objects by extracting the 'name' property
  const formatList = (list) => list.map((item) => item.name).join(", ");

  return (
    <div className="pokemon-details">
      <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <p className="pokemon-info">Height: {pokemon.height}</p>
      <p className="pokemon-info">Weight: {pokemon.weight}</p>
      <p className="pokemon-info">Base Experience: {pokemon.base_experience}</p>

      {/* <p className="pokemon-info">Types: {formatList(pokemon.types)}</p>
      <p className="pokemon-info">Abilities: {formatList(pokemon.abilities)}</p> */}

      <div className="pokemon-stats">
        <h3>Stats:</h3>
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats.map((stat) => (
              <tr key={stat.stat.name}>
                <td>{stat.stat.name.toUpperCase()}</td>
                <td>{stat.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pokemon-moves">
        <h3>Moves:</h3>
        <ul>
          {pokemon.moves.slice(0, 5).map((move) => (
            <p key={move.move.name}>{move.move.name.toUpperCase()}</p>
          ))}
        </ul>
      </div>

      <button onClick={() => navigate("/")} className="back-button">
        Back to Search
      </button>
    </div>
  );
}

export default SearchPokemonData;
