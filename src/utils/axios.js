import axios from "axios";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // timeout: 500,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});
