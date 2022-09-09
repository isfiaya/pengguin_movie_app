import axios from "axios";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // timeout: 500,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
});
