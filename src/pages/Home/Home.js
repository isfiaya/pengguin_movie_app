/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */

/** @jsxImportSource @emotion/react */

import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { axiosTMDB } from "utils/axios";
import { useSelector } from "react-redux";
import MovieCard from "../../components/shared/Card/index";
import Container from "@mui/material/Container";
import ImageNotFound from "../../assets/image_not_available.png";
import { Link } from "react-router-dom";
const Home = () => {
  const movies = useSelector((state) => state.movieDb.movie);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  // console.log("movie", movies);
  // useEffect(() => {
  //   axiosTMDB.get("/movie/550").then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              title={movie.title}
              img={
                movie.poster_path
                  ? `${BASE_URL}${movie.poster_path}`
                  : ImageNotFound
              }
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              key={movie.id}
              id={movie.id}
            />
          ))
        ) : (
          <p>there no movie </p>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
