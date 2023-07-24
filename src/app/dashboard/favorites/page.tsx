import { FavoritesPokemon } from '@/pokemons';

export const metadata = {
  title: 'Favorites',
  description: 'List of all your favorites pokemons',
};

export default async function PokemonsFavoritesPage() {
  return (
    <div className='flex flex-col px-6'>
      <div className='flex justify-between'>
        <span className='my-2 text-4xl font-bold'>Your favorites pokemons</span>
        <span className='flex flex-col justify-center italic text-blue-500 text-md'>
          (Global State)
        </span>
      </div>
      <FavoritesPokemon />
    </div>
  );
}
