import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import logger from './middlewares/logger'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        middleware: [
           logger, ...getDefaultMiddleware().concat(logger),
        ]
    }
  })

  export default store;