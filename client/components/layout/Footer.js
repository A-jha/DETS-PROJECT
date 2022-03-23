import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Linkedin from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import Collage from "../../utils/atom/Collage";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.footerContainer}
      >
        <Grid item xs={12} className={classes.footerHeading}>
          <Typography variant="h4" align="center">
            Thanks For Visiting DETS
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} className={classes.footerLinks}>
          <Typography align="center" variant="h5" gutterBottom>
            Quick Links
          </Typography>
          <a
            href="https://www.klyuniv.ac.in/"
            target="_blank"
            className={classes.a}
            rel="noreferrer"
          >
            <Typography align="center" className={classes.linkText}>
              University Homepage
            </Typography>
          </a>
          <Link href="/docs">
            <Typography
              align="center"
              sx={{ cursor: "pointer" }}
              className={classes.linkText}
            >
              Resources
            </Typography>
          </Link>
          <Link href="/gallery">
            <Typography
              align="center"
              className={classes.linkText}
              sx={{ cursor: "pointer" }}
            >
              Gallery
            </Typography>
          </Link>
          <Link href="/notice">
            <Typography
              align="center"
              className={classes.linkText}
              sx={{ cursor: "pointer" }}
            >
              Notice
            </Typography>
          </Link>
          <Link href="/prayukti">
            <Typography
              align="center"
              className={classes.linkText}
              sx={{ cursor: "pointer" }}
            >
              Events
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          flex
          justifyContent="center"
          alignItems="center"
          className={classes.collageContainer}
        >
          <Collage />
        </Grid>
        <Grid item xs={12} md={3} className={classes.footerSocial}>
          <Typography align="center" variant="h5" gutterBottom>
            Social
          </Typography>
          <div className={classes.socialIcons}>
            <Tooltip title="Linkedin Account">
              <IconButton
                href="https://github.com/A-jha/DETS-PROJECT"
                target="_blank"
              >
                <Linkedin fontSize="large" htmlColor="blue" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook Account">
              <IconButton>
                <FacebookIcon fontSize="large" htmlColor="blue" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram Account">
              <IconButton>
                <InstagramIcon fontSize="large" htmlColor="red" />
              </IconButton>
            </Tooltip>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.footerRights}>
          <Typography align="center">
            &copy; All rights reserved by Department Of Engineering And
            Technological Studies
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
