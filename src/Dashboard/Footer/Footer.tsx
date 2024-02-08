import React from "react";
import "./Footer.css";
import { Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="textSecondary">
              © {new Date().getFullYear()} HunguryIT. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary" align="right">
              <a
                href="https://www.linkedin.com/"
                target="https://www.linkedin.com/in/amit-kumar-4a356a192/"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="social-icon" />
              </a>
              <a
                href="https://github.com/"
                target="https://github.com/REGNOR123"
                rel="noopener noreferrer"
              >
                <GitHub className="social-icon" />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
