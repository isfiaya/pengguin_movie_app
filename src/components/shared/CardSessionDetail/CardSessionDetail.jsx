import PropTypes from "prop-types";
import { Grid, Typography, CardMedia } from "@mui/material";
import React from "react";
import BASE_URL from "@/constants/BaseUrl";
import ImageNotFound from "@/assets/image_not_available.png";

function CardSessionDetail(props) {
  const { episodeNumber, stillPath, name, overview } = props;

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 3,
        borderRadius: 5,
        cursor: "pointer",
        transition: "all 300ms ease",
        "&:hover": {
          background: "#363535",
          boxShadow: 3,
          transform: "scale(0.9)",
          color: "white",
        },
      }}
      rowSpacing={1}
    >
      <Grid item xs={12} md={1}>
        <Typography variant="h5" align="center">
          {episodeNumber}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <CardMedia
          component="img"
          image={stillPath ? `${BASE_URL}${stillPath}` : ImageNotFound}
          alt="episode image"
          sx={{ borderRadius: 4, paddingBottom: 1 }}
        />
      </Grid>
      <Grid item xs={12} md={8} sx={{ paddingRight: 3, paddingLeft: 3 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{overview}</Typography>
      </Grid>
    </Grid>
  );
}
CardSessionDetail.propTypes = {
  name: PropTypes.string,
  episodeNumber: PropTypes.number,
  stillPath: PropTypes.string,
  overview: PropTypes.string,
};
export default CardSessionDetail;
