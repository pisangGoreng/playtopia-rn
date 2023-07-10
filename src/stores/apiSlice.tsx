import {createApi} from '@reduxjs/toolkit/query/react';
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query';

export const api = createApi({
  keepUnusedDataFor: 1,
  tagTypes: ['Cities'],
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://dev-graphql.playtopia.id/graphql/v1',
  }),
  endpoints: () => ({}),
});
