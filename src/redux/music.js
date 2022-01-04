import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const MusicApi = createAsyncThunk('music/MusicApi', function() {
  const response = fetch(
    'https://shazam.p.rapidapi.com/auto-complete?term=kiss%20the&locale=en-US',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        'x-rapidapi-key': '229e111cb1msh5187f4ffb24acb1p191483jsn80dcf500b2ac',
      },
    }
  );

  const data = response.json();
  return data;
});
const getMusic = createSlice({
  name: 'music',
  initialState: {
    list: [],
    error: null,
    status: null,
  },
  extraReducers: {
    [MusicApi.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [MusicApi.fulfilled]: (state, action) => {
      state.status = 'succes';
      state.list = action.payload;
    },
    [MusicApi.rejected]: (state, action) => {
      state.status = 'reject';
      state.error = action.payload;
    },
  },
});

export default getMusic.reducer;
