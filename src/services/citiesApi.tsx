import {api} from '../stores/apiSlice';
import {gql} from 'graphql-request';

import {IallCity} from '../typings/cities';

export const citiesApi = api.injectEndpoints({
  endpoints: build => ({
    getCities: build.query<IallCity, void>({
      query: () => ({
        document: gql`
          query {
            allCities {
              id
              name
            }
          }
        `,
      }),
      // providesTags: ['Cities'],
      invalidatesTags: ['Cities'],
      transformResponse: (cities: {allCities: IallCity}) => {
        return cities.allCities;
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetCitiesQuery} = citiesApi;
