import React from "react"
import Layout from "../components/Layout/index"
import { Typography, Grid, Paper, Badge } from "@mui/material"
import { makeStyles } from "@mui/styles"
const Docs = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Documents & Resources
          </Typography>
          <Typography align="center" variant="body2">
            Many of us have special memories of the books that have inspired us,
            and have learned the profound effect that reading the right book can
            have at the right moment. If you’re short on time, reading some
            links about topics is the next best thing.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.bookCard}>
          <Paper className={classes.book}>
            <Typography>Book-1</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Docs

const useStyles = makeStyles(() => ({
  bookCard: {
    color: "white",
    margin: "1rem !important",
    padding: "1rem !important",
  },
  book: {
    minHeight: "100px",
    backgroundImage: "url(https://i.ibb.co/cxWLftL/124383.jpg)",
  },
}))
