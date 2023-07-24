import Link from 'next/link';
import Image from 'next/image';

import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonFavorite } from './PokemonFavorite';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className='right-0 mx-auto w-60 h-[330px] rounded-2xl'>
      <div className='flex flex-col h-full overflow-hidden bg-white shadow-lg rounded-2xl'>
        <div className='flex flex-col items-center justify-center w-full h-full pt-6 pb-4 text-center bg-gray-800 border-b'>
          <div className='relative flex flex-col items-center justify-center w-full h-full mx-4'>
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={name}
              priority={false}
              style={{ objectFit: 'contain' }}
              fill
            />
          </div>
          <p className='pt-1 pb-1 text-lg font-semibold capitalize text-gray-50'>
            {name}
          </p>
          <div className='flex flex-col items-end'>
            <Link
              href={`/dashboard/pokemons/${name}`}
              className='px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full'
            >
              Show more...
            </Link>
          </div>
        </div>
        <PokemonFavorite pokemon={pokemon} />
      </div>
    </div>
  );
};
