import PokemonAll from "../Pokemon/PokemonAll";
import "./PokemonList.css";
import usepokimonList from "../Hooks/usepokimonList";

function PokemonList() {
  const [pokemonListState, setPokemonListState] = usepokimonList();
  console.log("baade chahe", pokemonListState);

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading
          ? "Loading..."
          : pokemonListState.pokemonList.map((p) => (
              <PokemonAll name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          className="btn"
          disabled={pokemonListState.prevUrl == null}
          onClick={() => {
            setPokemonListState((prevState) => ({
              ...prevState,
              pokedexUrl: pokemonListState.prevUrl,
            }));
          }}
        >
          Prev
        </button>
        <button
          className="btn"
          disabled={pokemonListState.nextUrl == null}
          onClick={() => {
            setPokemonListState((prevState) => ({
              ...prevState,
              pokedexUrl: pokemonListState.nextUrl,
            }));
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
