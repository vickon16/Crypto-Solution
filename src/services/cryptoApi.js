import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => ({ url: `/coins?limit=${count}`, headers: cryptoApiHeaders }),
      transformResponse: (response) => response?.data,
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => ({ url: `/coin/${coinId}`, headers: cryptoApiHeaders }),
      transformResponse: (response) => response?.data?.coin,
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => ({ url: `/coin/${coinId}/history?timePeriod=${timePeriod}`, headers: cryptoApiHeaders }),
      transformResponse: (response) => response?.data
    }),
    getCryptoExchanges: builder.query({
      query: (coinId) => ({ url: `/coin/${coinId}/exchanges`, headers: cryptoApiHeaders }),
      transformResponse: (response) => response?.data?.exchanges
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptoHistoryQuery, useGetCryptoExchangesQuery } = cryptoApi;
