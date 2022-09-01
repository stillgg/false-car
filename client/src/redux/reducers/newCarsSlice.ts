import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  cars: null;
}

const initialState: CounterState = {
  cars: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      //   state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   });
  },
});

export const { decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
