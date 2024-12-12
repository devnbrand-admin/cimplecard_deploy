import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepData: {
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    step5: null,
    step6: null,
    step7: null,
  },
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setStepData: (state, action) => {
      const { step, data } = action.payload;
      state.stepData[step] = data;
    },
    resetStepData: (state) => {
      state.stepData = initialState.stepData;
    },
  },
});

export const { setStepData, resetStepData } = cardSlice.actions;
export default cardSlice.reducer;
