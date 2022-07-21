import React from "react";
import { Grid, Typography, IconButton, Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Linkedin from "@mui/icons-material/LinkedIn";
import NextLink from "next/link";
import { Tooltip } from "@mui/material";
import classes from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.footerContainer}
      >
        <Grid item xs={12} md={3} className={classes.footerLinks}>
          <Typography align="center" variant="h5" gutterBottom>
            Quick Links
          </Typography>
          {links.map((link, index) => {
            return (
              <div className={classes.links}>
                <NextLink href={link.path} passHref>
                  <Link target="_blank" className={classes.link}>
                    {link.title}
                  </Link>
                </NextLink>
              </div>
            );
          })}
        </Grid>
        <Grid
          item
          xs={10}
          md={5}
          flex
          justifyContent="center"
          alignItems="center"
          className={classes.collageContainer}
        >
          <Box>
            <Typography variant="h5" textAlign="center">
              Location
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2438.4824018360646!2d88.44867991899827!3d22.988717390577545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8952dfe81fac3%3A0x971492b2f1fcd20!2sDepartment%20Of%20Engineering%20and%20Technological%20Studies!5e0!3m2!1sen!2sin!4v1655113133356!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </Box>
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

const links = [
  {
    path: "https://www.klyuniv.ac.in/",
    title: "University Homepage",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/notice",
    title: "Notice",
  },
  {
    path: "/events",
    title: "Events",
  },
];
export default Footer;
