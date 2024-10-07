import axios from "axios";
import React, { useEffect, useState } from "react";
import usepokimonList from "./usepokimonList";

function usePokemonDetails(id) {
  const [pokemon, setpokemon] = useState({});
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemonofsametype = axios.get(
      `https://pokeapi.co/api/v2/type/${
        response.data.types ? response.data.types[0].type.name : ""
      }`
    );
    console.log(response.data);
    setpokemon((state) => ({
      ...state,
      name: response.data.name,
      images: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
      //   similarpokemon: pokemonofsametype.data.pokemon,
    }));
    pokemonofsametype.then((response) => {
      setpokemon((state) => ({
        ...state,
        url: response.data.pokemon.url,
        similarpokemon: response.data.pokemon.slice(0, 20),
      }));
    });
    setpokemonListState({
      ...pokemonListState,
      type: response.data.types ? response.data.types[0].type.name : "",
    });
  }
  const [pokemonListState, setpokemonListState] = usepokimonList();

  useEffect(() => {
    //console.log("response");
    downloadPokemon();
    console.log("pokipoki", pokemonListState);
  }, []);

  return [pokemon];
}
export default usePokemonDetails;
