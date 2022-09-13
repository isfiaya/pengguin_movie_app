import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BASE_URL from "constants/BaseUrl";
import { setWatchList } from "redux/features/movie.slice";
import CardSessionDetail from "components/shared/CardSessionDetail";
import Tag from "components/shared/Tag";
import CenterContainer from "components/containers/CenterContainer";
import useFetch from "hooks/useFetch";
import ColorButton from "components/shared/Button/Button.styles";
function ShowDetail() {
  // Variables
  const [seasonNumber, setSeasonNumber] = useState(1);
  const dispatch = useDispatch();
  let { id } = useParams();
  const { watchList } = useSelector((state) => state.movieDb);
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(
    watchList.some((element) => element.id === id)
  );
  // Fetch data
  const { data: episode, loading, error } = useFetch(`/tv/${id}`);
  const { data: seasonData, loading: isReady } = useFetch(
    `/tv/${id}/season/${seasonNumber}`
  );
  // Methods
  const addToWatchList = () => {
    dispatch(setWatchList(episode?.data));
  };
  const handleChangeSelect = (event) => {
    setSeasonNumber(event.target.value);
  };
  useEffect(() => {
    setIsAddedToWatchList(
      watchList.some((element) => element.id === Number(id))
    );
  }, [watchList]);
  if (loading) return <CenterContainer />;
  if (error) return <Typography variant="h6">{error}</Typography>;
  return (
    <>
      <Box
        sx={[
          {
            position: "relative",
            height: "80vh",
            backgroundImage: `url(${BASE_URL}${episode?.data?.backdrop_path})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            objectFit: "contain",
          },
        ]}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingTop: 8,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ marginBottom: 3 }}>
                {episode?.data?.name}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {episode?.data?.genres &&
                  episode?.data?.genres.map((genre) => {
                    return <Tag name={genre.name} key={genre.id} />;
                  })}
              </Box>

              <Typography variant="body1" gutterBottom sx={{ marginBottom: 3 }}>
                {episode?.data?.overview}
              </Typography>
              {isAddedToWatchList ? (
                <Tag name={"added to Watchlist"} />
              ) : (
                <ColorButton variant="contained" onClick={addToWatchList}>
                  Watchlist
                </ColorButton>
              )}
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            height: 100,
            width: "100%",
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111)",
          }}
        />
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <Typography variant="h4">Episodes</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">session</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={seasonNumber}
              defaultValue="1"
              label="session"
              onChange={handleChangeSelect}
            >
              {episode?.data &&
                [...Array(episode?.data?.number_of_seasons).keys()].map(
                  (_, index) => {
                    return (
                      <MenuItem value={index + 1} key={index}>
                        Session {index + 1}
                      </MenuItem>
                    );
                  }
                )}
            </Select>
          </FormControl>
        </Box>
        <Box>
          {seasonData?.data?.episodes?.length ? (
            seasonData.data.episodes.map((session) => {
              return (
                <CardSessionDetail
                  episodeNumber={session.episode_number}
                  stillPath={session.still_path}
                  name={session.name}
                  overview={session.overview}
                  key={session.id}
                />
              );
            })
          ) : (
            <Typography variant="h6">No episodes exist yet </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default ShowDetail;
