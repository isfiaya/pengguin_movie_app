/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import {
  TextField,
  Toolbar,
  Box,
  Button,
  AppBar,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setMovie, setName } from "redux/features/movie.slice";
import { setThemeMode } from "redux/features/theme.slice";
import { useTheme } from "@mui/material/styles";
import { axiosTMDB } from "utils/axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import MaterialUISwitch from "components/shared/Switch/Switch";
export default function Header() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { name } = useSelector((state) => state.movieDb);
  const location = useLocation();
  const fetchSearch = async () => {
    let params = { query: name };
    try {
      const { data } = await axiosTMDB.get(`/search/tv`, { params });

      dispatch(setMovie(data.results));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeTheme = () => {
    theme.palette.mode === "dark"
      ? dispatch(setThemeMode("light"))
      : dispatch(setThemeMode("dark"));
  };
  const storeSerachingText = (e) => {
    dispatch(setName(e.target.value));
  };
  useEffect(() => {
    if (name) {
      const dataFetch = setTimeout(() => {
        window.scroll(0, 0);
        fetchSearch();
      }, 500);
      return () => clearTimeout(dataFetch);
    } else dispatch(setMovie([]));
  }, [name]);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => storeSerachingText(e)}
            sx={{ marginLeft: "auto" }}
          />

          {location.pathname === "/watchlist" ? (
            <Button
              variant="contained"
              color="error"
              sx={{
                marginLeft: "auto",
              }}
            >
              <Link to={"/"} css={{ color: "inherit", textDecoration: "none" }}>
                Home
              </Link>
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"

              sx={[
                {
                  marginLeft: "auto",
                },
              ]}
            >
              <Link
                to={"/watchlist"}
                css={{ color: "inherit", textDecoration: "none" }}
              >
                Watch List
              </Link>
            </Button>
          )}

          <MaterialUISwitch onClick={changeTheme} defaultChecked />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
