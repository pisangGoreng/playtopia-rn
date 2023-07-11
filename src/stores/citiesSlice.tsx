import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Icity} from '../typings/cities';

export interface CitiesState {
  searchParams: string;
  cities: Icity[];
}

const initialState: CitiesState = {
  searchParams: '',
  cities: [],
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
