import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    priceRange: { min: 0, max: 0 },
    mileageRange: { min: 0, max: 0 },
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: state => ({
      brand: '',
      priceRange: { min: 0, max: 0 },
      mileageRange: { min: 0, max: 0 },
    }),
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
