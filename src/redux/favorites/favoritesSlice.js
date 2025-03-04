import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    showFavorite: false,
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.items = state.items.filter(car => car.id !== payload);
    },
    showFavorite: state => {
      state.showFavorite = !state.showFavorite;
    },
    // resetFavorites: state => {
    //   state.favorites = [];
    // },
  },
});

export const { addFavorite, removeFavorite, showFavorite } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
