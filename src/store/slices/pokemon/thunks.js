import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
  return async( dispatch, getState ) => {
    dispatch( startLoadingPokemons() );

    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10}`);

    // const data = await resp.json();
    // console.log( data );

    dispatch( setPokemons({ pokemons: data.results, page: page + 1, isLoading: false }) );
  }
}
