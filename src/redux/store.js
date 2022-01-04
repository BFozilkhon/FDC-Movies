import { configureStore } from '@reduxjs/toolkit';
import getFetch from './movies';
import getContext from './context';
import getMusic from './music';

export const store = configureStore({
  reducer: { moviesTodo: getFetch, context: getContext, music: getMusic },
});
