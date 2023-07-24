import { SimplePokemon, PokemonsReponse } from '../interfaces';

export const getPokemons = async (
  limit = 0,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map(({ url, name }) => ({
    id: url.split('/').at(-2)!,
    name,
  }));

  return pokemons;
};
