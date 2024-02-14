import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_COUNTRY_URL }),
  endpoints: (builder) => {
    return {
      fetchAllCountry: builder.query({
        query: () => {
          return {
            url: "/all",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAllCountryQuery } = countryApi;
export { countryApi };