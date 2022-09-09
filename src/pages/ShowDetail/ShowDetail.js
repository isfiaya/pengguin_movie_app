import { Grid, Box, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageNotFound from "../../assets/image_not_available.png";

function ShowDetail() {
  let { id } = useParams();
  const [content, setContent] = useState(null);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const fetchDataById = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setContent(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDataById();
  }, []);
  return (
    <Grid container sx={{ padding: 2 }}>
      <Grid item xs={12} md={4}>
        <CardMedia
          component="img"
          height="350"
          image={
            content?.poster_path
              ? `${BASE_URL}${content.poster_path}`
              : ImageNotFound
          }
          alt="movie_picture"
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">{content?.title}</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {content?.release_date} |
          {content?.genres.map((genre) => (
            <Typography variant="span" ml={1} key={genre.id}>
              {genre.name}
            </Typography>
          ))}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Overview
        </Typography>
        <Typography variant="p" gutterBottom>
          {content?.overview}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ShowDetail;
