import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardData: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardData: (state, action) => {
      state.cardData = action.payload;
    },
  },
});

export const { setCardData } = cardSlice.actions;
export default cardSlice.reducer;
