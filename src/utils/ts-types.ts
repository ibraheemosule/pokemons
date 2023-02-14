export type pokemonListType = {
  name: string;
  url: string;
};

export interface IPokemonsState {
  paginatedList: pokemonListType[];
  pokemonsList: pokemonListType[];
  immutablePokemonsList: pokemonListType[];
  loading: boolean;
  error: string;
}

export interface IPokedexState<T> {
  pokedexDetailsList: T;
}
