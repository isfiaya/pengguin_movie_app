/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./Header.styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovie } from "../../redux/movie.slice";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
// import { Brightness4Icon, Brightness7Icon } from '@mui/icons-material';

// import { useTheme } from '@mui/material/styles';

export default function Header() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("aaa");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const dispatch = useDispatch();
  // const theme = useTheme();
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      dispatch(setMovie(content));
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (searchText) {
      setTimeout(() => {
        window.scroll(0, 0);
        fetchSearch();
      }, [500]);
    } else dispatch(setMovie([]));
    // eslint-disable-next-line
  }, [searchText]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"} css={{
            color: "inherit",
            textDecoration: "none"
          }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ display: { xs: "none", sm: "block" }, marginRight: 2 }}
            >
              Home
            </Typography>
          </Link>
          <Link to={"/watchList"} css={{
            color: "inherit",
            textDecoration: "none"
          }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              List
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </Search>
          {/* <IconButton sx={{ ml: 1 }} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
