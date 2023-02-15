export type PokemonListType = {
  name: string;
  url: string;
};

export interface IPokemonsState {
  paginatedList: PokemonListType[];
  pokemonsList: PokemonListType[];
  immutablePokemonsList: PokemonListType[];
  loading: boolean;
  error: string;
}

export interface IPokedexState<T> {
  pokedexDetailsList: T;
  searchError: string;
  searching: boolean;
  searchByIdResult: PokemonListType[];
}
