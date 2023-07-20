import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { getPokemons } from '@/pokemons/services';

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
