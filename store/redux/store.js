import {configureStore} from '@reduxjs/toolkit';
import favSlice from './favourites';

export const store = configureStore({
    reducer: {
      favoriteMeals: favSlice
    }
})