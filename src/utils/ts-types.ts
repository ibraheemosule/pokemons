export type pokemonListType = {
  name: string;
  url: string;
};

export interface IPokemonsState {
  pokemonsList: pokemonListType[];
  immutablePokemonsList: pokemonListType[];
  loading: boolean;
  error: string;
}

export interface IPokedexState {
  pokedexDetailsList: pokemonListType[];
}
