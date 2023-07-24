import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

    add(state) {
      state.count++;
    },

    substract(state) {
      if (state.count === 0) return;

      state.count--;
    },

    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;

      state.count = action.payload;
    },
  },
});

export const { add, substract, resetCount, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
