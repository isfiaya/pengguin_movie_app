import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  name: "",
  watchList: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movies = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter((movie) => {
        return movie.id !== action.payload;
      });
    },
  },
});

export const { setMovie, setName, setWatchList, removeFromWatchList } =
  movieSlice.actions;

export default movieSlice.reducer;
