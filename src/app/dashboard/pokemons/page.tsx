import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import Image from 'next/image';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const pokemonsResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const data = pokemonsResponse.results.map((result) => ({
    id: result.url.split('/').at(-2)!,
    name: result.name,
  }));

  return data;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col'>
      <span className='px-4 py-2 my-2 text-5xl'>
        List of Pokemons <small>static</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
