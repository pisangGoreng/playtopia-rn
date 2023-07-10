import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CitiesState {
  searchParams: string;
}

const initialState: CitiesState = {
  searchParams: '',
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    resetCities: () => {
      return initialState;
    },
    updateSearchParams: (state, action: PayloadAction<string>) => {
      state.searchParams = action.payload;
    },
  },
});

export const {resetCities, updateSearchParams} = citiesSlice.actions;

export default citiesSlice.reducer;
