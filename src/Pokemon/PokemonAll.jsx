import React from "react";
import "./PokemonAll.css";
import { Link } from "react-router-dom";

function PokemonAll({ name, image, id }) {
  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
        <div className="name-tag">{name}</div>
        <div>
          <img id="all-image" src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
}

export default PokemonAll;
