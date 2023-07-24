import { Metadata } from 'next';

import { PokemonGrid } from '@/pokemons';
import { getPokemons } from '@/pokemons/services';

export const metadata: Metadata = {
  title: 'Pokémons',
  description: 'List of multiple pokemons available',
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(20);

  return (
    <div className='flex flex-col px-6'>
      <div className='flex justify-between'>
        <span className='my-2 text-4xl font-bold'>List of Pokemons</span>
        <span className='flex flex-col justify-center my-2 italic text-blue-500 text-md'>
          (static)
        </span>
      </div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
