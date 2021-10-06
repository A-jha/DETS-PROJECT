import React from "react"
import SignUp from "../components/Form/SignUp"
import { Typography, Grid, Paper, CssBaseline } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Layout from "../components/Layout/index"
const Auth = () => {
  const classes = useStyles()
  return (
    <Layout title={"SignUp"}>
      <Grid container justifyContent="center" className={classes.main}>
        <CssBaseline />
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Please Fill All Details Carefully
          </Typography>
        </Grid>
        <Grid item className={classes.fromContainer}>
          <SignUp />
        </Grid>
      </Grid>
    </Layout>
  )
}

const useStyles = makeStyles(theme => ({
  main: {
    padding: "1rem",
  },
  fromContainer: {
    margin: "2rem 0rem !important",
    backgroundImage: "linear-gradient(to right, #fff,#ddd) ",
    padding: "2rem",
    width: "90vw",
    maxWidth: "1000px",
    borderRadius: ".5rem",
  },
}))
export default Auth
