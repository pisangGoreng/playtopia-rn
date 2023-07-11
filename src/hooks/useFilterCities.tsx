import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {IRootState} from '../stores';
import {updateSearchParams} from '../stores/citiesSlice';

export function useFilterCities() {
  const dispatch = useDispatch();
  const searchParams = useSelector(
    (state: IRootState) => state.cities.searchParams,
  );

  // const [filterRate, setFilterRate] = useState(1);
  const [params, setParams] = useState(searchParams);

  // const handleRating = (rate: number) => {
  //   setFilterRate(rate);
  // };

  const handleFilter = (val: string) => {
    // setParams(val);
    dispatch(updateSearchParams(val));
  };

  return {searchParams, handleFilter};
}
