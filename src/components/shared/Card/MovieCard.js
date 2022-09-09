/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */

/** @jsxImportSource @emotion/react */

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import CircularProgressWithLabel from "../Progress/CircularProgressWithLabel";
import { Link } from "react-router-dom";

const MovieCard = ({ title, img, releaseDate, voteAverage, id }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={{
        pathname: `/show/${id}`,
      }}
        css={{
          color: "inherit",
          textDecoration: "none"
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt="green iguana"
            />
            <CardContent sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {releaseDate}
                </Typography>
              </Box>
              {/* <CircularProgressWithLabel value={voteAverage} /> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid >

  );
};
export default MovieCard;
