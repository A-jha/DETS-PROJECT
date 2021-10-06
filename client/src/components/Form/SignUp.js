import React from "react"
import { Typography, TextField, Stack, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
const SignupForm = () => {
  const classes = useStyles()
  return (
    <form>
      <Stack spacing={2}>
        <div className={classes.formItem}>
          <Typography id="usernameError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            variant="outlined"
            name="username"
            label="Username"
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="firstNameError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            variant="outlined"
            name="firstName"
            label="First Name"
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="lastNameError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            variant="outlined"
            name="lastName"
            label="Last Name"
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="emailError"></Typography>
          <TextField
            fullWidth={true}
            type="email"
            variant="outlined"
            name="email"
            label="Email"
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="passwordError"></Typography>
          <TextField
            fullWidth={true}
            type="password"
            variant="outlined"
            name="password"
            label="Password"
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="confirmPasswordError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            variant="outlined"
            name="confirmPassword"
            label="Confirm Password"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

export default SignupForm

const useStyles = makeStyles(theme => ({
  formItem: {},
}))
