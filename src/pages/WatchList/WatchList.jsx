import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import MovieCard from "@/components/shared/Card/index";
import Container from "@mui/material/Container";
import ImageNotFound from "@/assets/image_not_available.png";
import BASE_URL from "@/constants/BaseUrl";

const WatchList = () => {
  const { watchList } = useSelector((state) => state.movieDb);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {watchList.length
          ? watchList.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard
                  title={movie.name}
                  img={
                    movie.poster_path
                      ? `${BASE_URL}${movie.backdrop_path || movie.poster_path}`
                      : ImageNotFound
                  }
                  id={movie.id}
                  movieData={movie}
                  firstAirDate={movie.first_air_date}
                  voteAverage={movie.vote_average}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
};

export default WatchList;
