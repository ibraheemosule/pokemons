import axios from 'axios';
import { pokemonListType } from './ts-types';

const Axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const fetchData = async (url: string) => {
  const { data } = await Axios.get(url);
  return data;
};

export const getAllPokemons = async () => {
  let data: pokemonListType[] = [],
    next: boolean | null = true,
    offset = 500;

  do {
    try {
      const res = await fetchData(`/?limit=200&offset=${offset}`);
      data = [...data, ...res.results];
      offset += 500;
      next = res.next;
    } catch {
      next = false;
    }
  } while (next);

  return data;
};
