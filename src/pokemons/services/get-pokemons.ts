import { MyDashboardGet } from '@/common/services';
import { PokemonsResponse, SimplePokemon } from '../interfaces';

export const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const { data: pokemonsResponse } = await MyDashboardGet<PokemonsResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data = pokemonsResponse.results.map((result) => ({
    id: result.url.split('/').at(-2)!,
    name: result.name,
  }));

  return data;
};
