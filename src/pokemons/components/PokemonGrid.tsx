import { SimplePokemon } from '../interfaces';
import PokemonCard from './PokemonCard';

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-10'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
