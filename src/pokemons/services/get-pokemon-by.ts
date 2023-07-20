import { notFound } from 'next/navigation';
import { Pokemon } from '../interfaces';
import { MyDashboardGet } from '@/common/services';

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const { data: pokemon } = await MyDashboardGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    console.log(`Loaded pokemon ${pokemon.id}`);

    return pokemon;
  } catch (error) {
    notFound();
  }
};

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  try {
    const { data: pokemon } = await MyDashboardGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    console.log(`Loaded pokemon ${pokemon.name}`);

    return pokemon;
  } catch (error) {
    notFound();
  }
};
