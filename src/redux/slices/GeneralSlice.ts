import {GeneralSlice} from '@models/general';
import {createSlice} from '@reduxjs/toolkit';

const initialState: GeneralSlice = {};

export const generalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const {} = generalSlice.actions;

export default generalSlice.reducer;
