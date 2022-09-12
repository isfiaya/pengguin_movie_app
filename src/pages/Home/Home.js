/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */

/** @jsxImportSource @emotion/react */

import { Grid, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import MovieCard from "../../components/shared/Card/index";
import Container from "@mui/material/Container";
import ImageNotFound from "../../assets/image_not_available.png";
import BASE_URL from 'constants/BaseUrl'


const Home = () => {
  const { movies, name } = useSelector((state) => state.movieDb);

  return (
    <Container sx={{ marginTop: 4 }}>
      {name && <Typography variant="h4" align="center" gutterBottom  >
        You are seraching for "{name}"
      </Typography>}
      {/* {name && !movies.length ? <Typography variant="h4" align="center">
        No results for your query {name}
      </Typography> : null} */}
      {!name && <Typography variant="h4" align="center">
        start searching
      </Typography>}


      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {movies.length ? (
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard
                title={movie.name}
                img={
                  movie.poster_path
                    ? `${BASE_URL}${movie.backdrop_path || movie.poster_path}`
                    : ImageNotFound
                }
                firstAirDate={movie.first_air_date}
                voteAverage={movie.vote_average}
                id={movie.id}
                movieData={movie}

              />
            </Grid>
          ))
        ) : null}
      </Grid >
    </Container>
  );
};

export default Home;
