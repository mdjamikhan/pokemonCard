import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../Hooks/usePokemonDetails";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id);

  // Check if pokemon is loaded before rendering
  if (!pokemon || !pokemon.types) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details-wrappers">
      <img className="pokemon-details-image" src={pokemon.images} alt="" />
      <div className="pokemon-details-name">
        <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-details-name">Height -: {pokemon.height}</div>
      <div className="pokemon-details-name">Weight -: {pokemon.weight}</div>

      <div className="pokemon-details-types">
        {/* Check if pokemon.types is available */}
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>

      {/* Check if pokemon.similarpokemon is available */}
      {pokemon.types && pokemon.similarpokemon && (
        <div className="types-of-pokemon">
          More {pokemon.types[0]} type Pokémon
          <ul className="List-of-types">
            {pokemon.similarpokemon.map((p, index) => (
              <li key={p.pokemon.id || index}>{p.pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
