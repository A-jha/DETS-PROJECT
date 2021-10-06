import React from "react"
import Layout from "../components/Layout/index"
import { Grid, Paper, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@mui/styles"
import StudentCard from "../components/Card/StudentCard"
import ColorPile from "../components/particals/colorPile"
const Alumni = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.main}>
        <Paper className={classes.headContent}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <StaticImage
                src="https://i.ibb.co/RpJjrvB/student.jpg"
                alt="students"
                placeholder="tracedSVG"
                layout="constrained"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography>
                DETS has many potentially great students they worked harder and
                got admitted in good IIT's, NIT's and IIIT's too{" "}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={3} className={classes.cardContainer}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Current Students
            </Typography>
            <div className={classes.colorCenter}>
              <ColorPile />
            </div>
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "First Year Student 2021-2025",
                total: "40",
                eie: "20",
                it: "20",
                cr: "Anubhavi",
                link: "student-detail",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Second Year Student 2020-2024",
                total: "40",
                eie: "20",
                it: "20",
                cr: "Sambhavi",
                link: "student-detail",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Third Year Student 2019-2023",
                total: "40",
                eie: "20",
                it: "20",
                cr: "ashavi",
                link: "student-detail",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Fourth Year Student 2018-2022",
                total: "40",
                eie: "20",
                it: "20",
                cr: "Jukta",
                link: "student-detail",
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.cardContainer}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Graduated Students
            </Typography>
            <div className={classes.colorCenter}>
              <ColorPile />
            </div>
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Batch 2017-2021",
                total: "40",
                eie: "20",
                it: "20",
                link: "student-detail",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Batch 2016-2020",
                total: "40",
                eie: "20",
                it: "20",
                link: "student-detail",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Batch 2015-2019",
                total: "40",
                eie: "20",
                it: "20",
                link: "student-detail",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.studentCard}>
            <StudentCard
              student={{
                title: "Batch 2014-2018",
                total: "40",
                eie: "20",
                it: "20",
                link: "student-detail",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Alumni

const useStyles = makeStyles(theme => ({
  main: {
    background: "#ebecbe",
  },
  colorCenter: {
    margin: "1rem 0rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headContent: {
    padding: "2rem",
    margin: "2rem",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  studentCard: {
    margin: "1rem !important",
  },
}))
