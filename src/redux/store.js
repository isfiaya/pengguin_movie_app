import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import movieReducer from './movie.slice'
const rootReducer = {
  theme: themeReducer,
  movieDb: movieReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
