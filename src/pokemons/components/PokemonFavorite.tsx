'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { SimplePokemon } from '../interfaces';
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonFavorite = ({ pokemon }: Props) => {
  const isFavorite = useAppSelector(
    (state) => !!state.pokemons.favorites[pokemon.id]
  );
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className='border-b'>
      <div
        onClick={onToggle}
        className='flex items-center h-full px-4 py-2 cursor-pointer hover:bg-gray-100'
      >
        <div className='text-red-600'>
          {isFavorite ? <IoHeart size={30} /> : <IoHeartOutline size={30} />}
        </div>
        <div className='pl-3'>
          <p className='text-sm font-medium leading-none text-gray-700'>
            {isFavorite
              ? 'Is one of your favorites'
              : 'Mark it as you favorite'}
          </p>
          <p className='text-xs italic text-gray-500'>Click to change</p>
        </div>
      </div>
    </div>
  );
};
