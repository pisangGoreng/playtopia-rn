import {createApi} from '@reduxjs/toolkit/query/react';
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query';

import {REACT_APP_BASE_URL_GRAPHQL} from '@env';
console.log(
  '🚀 ~ file: apiSlice.tsx:5 ~ REACT_APP_BASE_URL_GRAPHQL:',
  REACT_APP_BASE_URL_GRAPHQL,
);

export const api = createApi({
  keepUnusedDataFor: 1,
  tagTypes: ['Cities'],
  baseQuery: graphqlRequestBaseQuery({
    url: String(REACT_APP_BASE_URL_GRAPHQL),
  }),
  endpoints: () => ({}),
});
