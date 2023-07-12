import {useDispatch, useSelector} from 'react-redux';

import {IRootState} from '../stores';
import {updateSearchParams} from '../stores/citiesSlice';

export function useFilterCities() {
  const dispatch = useDispatch();
  const searchParams = useSelector(
    (state: IRootState) => state.cities.searchParams,
  );

  const handleFilter = (val: string) => {
    dispatch(updateSearchParams(val));
  };

  return {searchParams, handleFilter};
}
