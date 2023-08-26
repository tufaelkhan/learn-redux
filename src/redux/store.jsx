import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        middleware: [
            ...getDefaultMiddleware().concat(logger),
        ]
    }
  })

  export default store;