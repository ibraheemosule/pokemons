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

export interface INamedPokedexDetail {
  [key: string]: IPokedex;
}
export interface IPokedexState {
  pokedexDetailsList: INamedPokedexDetail;
  searchError: string;
  searching: boolean;
  searchByIdResult: PokemonListType[];
}

export interface IPokedex {
  id: number;
  name: string;
  height: number; // Height of the Pokemon in decimeters
  weight: number; // Weight of the Pokemon in hectograms
  abilities: IAbility[];
  types: IType[];
  stats: IStat[];
  held_items: IHeldItem[];
  sprites: ISprite;
  species: ISpecies;
  moves: IMove[];
  order: number;
  game_indices: IGameIndices[];
  base_experience: number;
  evolutions?: string[];
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface ISprite {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
  other: {
    home: { [key: string]: string };
    'official-artwork': { [key: string]: string };
  };
}

interface ISpecies {
  name: string;
  url: string;
}

interface IMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: IVersionGroupDetail[];
}

interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface IHeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    version: {
      name: string;
      url: string;
    };
    rarity: number;
  }[];
}

export interface IGameIndices {
  game_index: number;
  version: { name: string; url: string };
}

export interface IPokemonEvolution {
  species: {
    name: string;
    url: string;
  };
  evolution_details: {
    item: {
      name: string;
      url: string;
    };
    trigger: {
      name: string;
      url: string;
    };
  }[];
  evolves_to: IPokemonEvolution[];
}
