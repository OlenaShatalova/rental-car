import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  brand: null,
  price: null,
  mileageRange: { min: null, max: null },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    setFilters: (state, action) => {
      state = { ...state, ...action.payload };
    },
    clearFilters: state => {
      state = INITIAL_STATE;
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectFilters = state => state.filters;
