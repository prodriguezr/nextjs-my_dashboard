import Link from 'next/link';
import Image from 'next/image';

import { SimplePokemon } from '../interfaces';
import { IoHeartOutline } from 'react-icons/io5';

interface PokemonCardProps {
  pokemon: SimplePokemon;
  favorite?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, favorite }) => {
  const { id, name } = pokemon;

  return (
    <div className='right-0 mx-auto mt-2 w-60 rounded-xl'>
      <div className='overflow-hidden bg-gray-400 shadow-3xl rounded-xl'>
        <div className='flex flex-col items-center justify-center p-6 text-center bg-gray-800 border-b'>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            priority={false}
            width={100}
            height={100}
          />
          <p className='pt-2 text-lg font-semibold capitalize text-gray-50'>
            {name}
          </p>
          <Link
            className='px-4 py-2 mt-5 text-xs font-semibold text-gray-100 border rounded-full'
            href={`/dashboard/pokemon/${id}`}
          >
            Show more...
          </Link>
        </div>
      </div>
      <div className='border-b'>
        <Link
          href='/dashboard/main'
          className='flex items-center justify-center px-4 py-2 hover:bg-gray-100'
        >
          <div className='text-red-600'>
            <IoHeartOutline size={40} />
          </div>
          <div className='pl-3'>
            <p className='text-sm font-medium leading-none text-gray-800'>
              {favorite ? 'Is part of your favorites' : 'Mark it as favorite'}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
