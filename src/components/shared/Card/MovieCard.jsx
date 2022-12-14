import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";

// import { useHistory  } from "react-router-dom";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setWatchList,
  removeFromWatchList,
} from "@/redux/features/movie.slice";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CircularProgressWithLabel from "../Progress/CircularProgressWithLabel";

const MovieCard = ({
  title,
  img,
  id,
  movieData,
  firstAirDate,
  voteAverage,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { watchList } = useSelector((state) => state.movieDb);

  const first2Str = String(voteAverage).slice(0, 2);
  const first2Num = Number(first2Str);
  // Methods
  const addToWatchList = () => {
    dispatch(setWatchList(movieData));
  };
  const removeMovie = () => {
    dispatch(removeFromWatchList(id));
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Link
            to={{
              pathname: `/show/${id}`,
            }}
          >
            <CardMedia
              component="img"
              height="240"
              image={img}
              alt="green iguana"
            />
            <Box
              sx={{
                height: 40,
                width: "100%",
                position: "absolute",
                left: 0,
                bottom: 0,
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111)",
              }}
            />
          </Link>
        </CardActionArea>
        <CardContent>
          <Link
            to={{
              pathname: `/show/${id}`,
            }}
            css={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {firstAirDate && (
              <Typography variant="subtitle2" sx={{ color: "#bbafaf" }}>
                {firstAirDate}
              </Typography>
            )}
            {voteAverage !== 0 && (
              <CircularProgressWithLabel value={first2Num * 10} />
            )}
          </Box>
          {watchList.some((element) => element.id === id) ? (
            <Button
              variant="text"
              onClick={removeMovie}
              sx={[
                {
                  paddingLeft: 0,
                  gap: 1,
                  color: theme.palette.mode === "dark" ? "white" : "black",
                },
              ]}
            >
              <DoDisturbOnOutlinedIcon /> remove from watchlist
            </Button>
          ) : (
            <Button
              variant="text"
              onClick={addToWatchList}
              sx={{
                color: theme.palette.mode === "dark" ? "white" : "black",
                paddingLeft: 0,
                gap: 1,
              }}
            >
              <AddCircleOutlinedIcon /> Add to watchlist
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  voteAverage: PropTypes.number,
  firstAirDate: PropTypes.string,
  movieData: PropTypes.object,
};
export default MovieCard;
