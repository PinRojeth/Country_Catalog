import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { countryApi } from "./api/CountryApi";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      countryApi.middleware,
    );
  },
});
setupListeners(store.dispatch);

export { useFetchAllCountryQuery } from "./api/CountryApi";
