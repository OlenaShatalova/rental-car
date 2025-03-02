import { createSlice } from '@reduxjs/toolkit';
import { getBrandsList } from './operations';
import { handlePending, handleRejected } from '../../utils/statusHelper';

const INITIAL_STATE = {
  brandList: [],
  filters: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    setFilters: (state, { payload }) => {
      if (!payload) return;
      state.filters = { ...state.filters, ...payload };
    },
    resetFilters: state => {
      state.filters = INITIAL_STATE.filters;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBrandsList.pending, handlePending)
      .addCase(getBrandsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brandList = payload;
      })
      .addCase(getBrandsList.rejected, handleRejected);
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
