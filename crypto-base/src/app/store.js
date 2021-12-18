import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../Services/cryptoApi";
import { cryptoNewsApi } from "../Services/cryptoNewsApi";
import realCurrencyReducer from './../Services/realCurrencySlice';


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        realCurrency: realCurrencyReducer,
    },
})