import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonFavoritesState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonFavoritesState => {
//   const favorites = JSON.parse(localStorage.getItem('favPokemons') ?? '{}');

//   return favorites;
// };

const initialState: PokemonFavoritesState = {
  favorites: {},
  // ...getInitialState,
  // '1': { id: '1', name: 'bulbasaur' },
  // '8': { id: '8', name: 'gggfgf' },
  // '12': { id: '12', name: 'gggfgfhh' },
};

const pokemonsSlice = createSlice({
  name: 'pokemonsSlice',
  initialState,
  reducers: {
    setFavoritesPokemons(
      state,
      { payload }: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = payload;
    },
    toggleFavorite(state, { payload: pokemon }: PayloadAction<SimplePokemon>) {
      if (!!state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
      } else {
        state.favorites[pokemon.id] = pokemon;
      }

      //TODO: It should not be done in Redux
      localStorage.setItem('favPokemons', JSON.stringify(state.favorites));
    },
  },
});

export const { setFavoritesPokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
