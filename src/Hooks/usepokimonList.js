import axios from "axios";
import { useState, useEffect } from "react";

function usepokimonList() {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
  });

  async function downloadPokemon() {
    try {
      setPokemonListState((state) => ({ ...state, isLoading: true }));
      const res = await axios.get(pokemonListState.pokedexUrl);
      const pokemonResult = res.data.results;

      setPokemonListState((state) => ({
        ...state,
        nextUrl: res.data.next,
        prevUrl: res.data.previous,
      }));

      const pokemonResultPromises = pokemonResult.map((pokemon) =>
        axios.get(pokemon.url)
      );

      const pokemonDataResponses = await Promise.all(pokemonResultPromises);

      const results = pokemonDataResponses.map((response) => {
        const pokemon = response.data;
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other
            ? pokemon.sprites.other.dream_world.front_default
            : pokemon.sprites.front_shiny,
          types: pokemon.types.map((t) => t.type.name),
        };
      });

      setPokemonListState((state) => ({
        ...state,
        pokemonList: results,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemonListState((state) => ({
        ...state,
        isLoading: false,
      }));
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
}

export default usepokimonList;
