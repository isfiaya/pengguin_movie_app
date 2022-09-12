import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme.slice";
import movieReducer from './features/movie.slice'

const rootReducer = {
  theme: themeReducer,
  movieDb: movieReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
