import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { countryApi } from "./api/CountryApi";
// import { imgCountryApi } from "./api/ImgCountryApi";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    // [imgCountryApi.reducerPath]: imgCountryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      countryApi.middleware,
      // imgCountryApi.middleware
    );
  },
});
setupListeners(store.dispatch);

export { useFetchAllCountryQuery } from "./api/CountryApi";
// export { useFetchAllImageCountry } from "./api/ImgCountryApi";
