import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {memo: ''};

const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    saveMemo(state, action: PayloadAction<string>) {
      state.memo = action.payload;
    },
  },
});

export const {saveMemo} = memoSlice.actions;
export default memoSlice.reducer;
