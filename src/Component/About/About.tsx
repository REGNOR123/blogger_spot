import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <>
      <Grid container spacing={2} marginTop={10}>
        <Grid item xs={12}></Grid>
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h3" variant="h2">
            About Page Work In Progress.....
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
