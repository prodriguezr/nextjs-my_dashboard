'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import { PokemonGrid } from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';
import Link from 'next/link';

export const FavoritesPokemon = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <div className='flex flex-col'>
      {!favoritePokemons.length ? (
        <NoFavorites />
      ) : (
        <div className='flex flex-col'>
          <PokemonGrid pokemons={favoritePokemons} />
        </div>
      )}
    </div>
  );
};

export const NoFavorites = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>
      <IoHeartOutline size={100} className='text-red-500' />
      <p className='italic'>{`You don't have favorite pokemons yet`}</p>
      <Link
        href={'/dashboard/pokemons'}
        className='italic text-blue-600 text-md'
      >
        View the pokemons list
      </Link>
    </div>
  );
};
