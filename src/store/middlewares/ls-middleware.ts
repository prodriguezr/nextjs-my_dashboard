import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === 'pokemonsSlice/toggleFavorite') {
      const { pokemons } = state.getState() as RootState;

      localStorage.setItem('favPokemons', JSON.stringify(pokemons));

      return;
    }
    // console.log({ state: state.getState });
  };
};
