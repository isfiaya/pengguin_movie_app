import React from "react";
import { Grid, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import MovieCard from "../../components/shared/Card/index";
import Container from "@mui/material/Container";
import ImageNotFound from "../../assets/image_not_available.png";
import BASE_URL from "../../constants/BaseUrl";

const Home = () => {
  const { movies, name } = useSelector((state) => state.movieDb);
  const Movies = () => {
    return (
      movies?.results?.length &&
      movies.results.map((movie) => (
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
          key={movie.id}
        />
      ))
    );
  };
  return (
    <Container sx={{ marginTop: 4 }}>
      {name && movies?.total_results !== 0 ? (
        <Typography variant="h4" align="center" gutterBottom>
          You are seraching for "{name}"
        </Typography>
      ) : null}
      {!name && (
        <Typography variant="h4" align="center">
          start searching
        </Typography>
      )}

      {movies?.total_results === 0 && (
        <Typography variant="h4" align="center">
          No result for your searching {name}
        </Typography>
      )}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Movies />
      </Grid>
    </Container>
  );
};

export default Home;
