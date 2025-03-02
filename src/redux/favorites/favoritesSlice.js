import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.items = state.items.filter(car => car.id !== payload);
    },
    resetFavorites: state => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, resetFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;

export const selectFavorites = state => state.favorites.items;
