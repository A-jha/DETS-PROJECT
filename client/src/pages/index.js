import React from "react"
import Layout from "../components/Layout/index"
// import Slides from "../components/Slider/index"
import { makeStyles } from "@mui/styles"
import SimpleCard from "../components/Card/SimpleCard"
import { Grid, Typography } from "@mui/material"
import HodImg from "../assets/person/hod.jpg"
import { StaticImage } from "gatsby-plugin-image"
import ColorPile from "../components/particals/colorPile"
// import ComplexCard from "../components/Card/index"
export default function Home() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.topContent}
      >
        <Grid
          item
          xs={11}
          md={5}
          sx={{ marginTop: 2 }}
          className={classes.homeContent}
        >
          <Typography
            variant="h5"
            align="center"
            className={classes.contentHeading}
          >
            Welcome To Department of Engineering and Technological Studies
          </Typography>
        </Grid>
        <Grid item xs={11} md={6} className={classes.contentHeadingImg}>
          <StaticImage
            src="https://i.ibb.co/M1jcSW4/dets.jpg"
            alt="img"
            placeholder="tracedSVG"
            layout="constrained"
          />
        </Grid>
      </Grid>
      <Grid container className={classes.secondContent}>
        <Grid item xs={12} className={classes.singleCardContainer}>
          <Typography variant="h4" fontWeight={700} gutterBottom align="center">
            Head Of Department
          </Typography>
          <ColorPile />
          <SimpleCard
            title={"Head Of Department"}
            img={HodImg}
            about={{
              name: "Srinka Basu",
              experience: "10 Years",
              moto: "Work smartly",
              words:
                "Srinka Basu is one of the most talented and Enthusiastic teacher \n she is very helpful in nature and supportive to the students and focused to give the best opportunities to the students ",
            }}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

const useStyles = makeStyles({
  topContent: {
    background: "linear-gradient(to right , #654ea3, #FF416C,#F14B2B, #654ea3)",
  },
  homeContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeading: {
    padding: 2,
    fontWeight: 800,
    color: "#fff",
  },
  contentHeadingImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem .5rem",
  },
  secondContent: {
    padding: "2rem .5rem",
    background: "linear-gradient(to right , #654ea3, #FF416C,#F14B2B, #654ea3)",
  },
  singleCardContainer: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "center",
  },
})
