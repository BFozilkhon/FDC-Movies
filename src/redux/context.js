import { createSlice, useEffect } from '@reduxjs/toolkit';

const localData = localStorage.getItem('Array');
const getContext = createSlice({
  name: 'context',

  initialState: {
    mock: localData ? JSON.parse(localData) : [],
    sum: 0,
  },
  reducers: {
    save: (state, action) => {
      var count = 0;
      state.mock.map((value) => value.id == action.payload.ids && count++);
      count !== 1 && (state.mock = [...state.mock, action.payload.all]);
    },
    deletes: (state, action) => {
      state.mock = state.mock.filter((value) => value.id !== action.payload.id);
    },
  },
});

export const { save, deletes } = getContext.actions;

export default getContext.reducer;
