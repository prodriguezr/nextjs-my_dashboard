import { notFound } from 'next/navigation';

import { Pokemon } from '../interfaces';

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((resp) => resp.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
};

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((resp) => resp.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
};
