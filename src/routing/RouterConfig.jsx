import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "../components/containers/CenterContainer";
import { HOME, WATCHLIST, SHOW } from "../constants/routes";
const Header = lazy(() => import("../components/Header"));
const Home = lazy(() => import("../pages/Home"));
const ShowDetail = lazy(() => import("../pages/ShowDetail"));
const WatchList = lazy(() => import("../pages/WatchList"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SHOW} element={<ShowDetail />} />
        <Route path={WATCHLIST} element={<WatchList />} />
      </Routes>
    </Suspense>
  );
};

const Loader = () => (
  <CenterContainer>
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;
