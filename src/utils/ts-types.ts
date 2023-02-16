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

export interface PokemonSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}
