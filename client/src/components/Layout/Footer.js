import React from "react"
import { Grid, Typography, IconButton } from "@mui/material"
import { makeStyles } from "@mui/styles"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import { Link } from "gatsby"
import Collage from "../Collage/index"

const Footer = () => {
  const classes = useStyles()
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
            Services
          </Typography>
          <a
            href="https://www.klyuniv.ac.in/"
            target="_blank"
            t
            rel="noreferrer"
          >
            <Typography align="center">University Homepage</Typography>
          </a>
          <Link to="/docs">
            <Typography align="center">Resources</Typography>
          </Link>
          <Link to="/gallery">
            <Typography align="center">Gallery</Typography>
          </Link>
          <Link to="/notice">
            <Typography align="center">Notice</Typography>
          </Link>
          <Link to="/prayukti">
            <Typography align="center">Events</Typography>
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
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.footerRights}>
          <Typography>
            &copy; All rights reserved by Department Of Engineering And
            Technological Studies
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#6cecbe",
    paddingBottom: "2rem",
  },
  footerContainer: {},
  footerHeading: {
    margin: "1rem",
  },
  footerLinks: {},
  footerSocial: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column !important",
  },
  footerRights: {
    margin: "1rem",
    textAlign: "center",
  },
  collageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: ".5rem",
    overflow: "hidden",
  },
}))
