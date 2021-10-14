import React, { useState } from "react"
import SignUp from "../components/Form/SignUp"
import Login from "../components/Form/Login"
import { Typography, Grid, Box, CssBaseline, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Layout from "../components/Layout/index"

import ColorPile from "../components/particals/colorPile"
const Auth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [authType, setAuthType] = useState("SignUp")
  const [buttonText, setButtonText] = useState("Login")
  const classes = useStyles()
  const changeForm = () => {
    setIsLogin(!isLogin)
    if (authType === "SignUp") {
      setAuthType("Login")
      setButtonText("SignUp")
    } else {
      setAuthType("SignUp")
      setButtonText("Login")
    }
  }

  return (
    <Layout title={authType}>
      <Grid container justifyContent="center" className={classes.main}>
        <CssBaseline />
        {!isLogin ? (
          <Grid item className={classes.fromContainer}>
            <SignUp />
            <Typography align="center" padding={2}>
              If You are Already Registered Please{" "}
              <Button onClick={() => changeForm()}>Login</Button>{" "}
            </Typography>
          </Grid>
        ) : (
          <Grid item className={classes.fromContainer}>
            <Login />
            <Typography align="center" padding={2}>
              If You are Not Registered Please{" "}
              <Button onClick={() => changeForm()}>{buttonText}</Button>{" "}
            </Typography>
          </Grid>
        )}

        <Grid item xs={12}></Grid>
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
