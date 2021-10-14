import React, { useState } from "react"
import { Typography, TextField, Stack, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
const SignupForm = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [inputErrorState, setInputErrorState] = useState({
    userNameErrorState: false,
    firstNameErrorState: false,
    lastNameErrorState: false,
    emailErrorState: false,
    passwordErrorState: false,
    confirmPasswordErrorState: false,
  })
  const [inputError, setInputError] = useState({
    userNameError: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "post",
        mode: "no-cors",
        body: JSON.stringify({
          username: userInput.username,
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
          confirmPassword: userInput.confirmPassword,
        }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json()
      console.log(data)
      console.log("handled")
    } catch (error) {
      console.log(userInput)
      console.log(error)
    }
  }
  const classes = useStyles()
  return (
    <form>
      <Stack spacing={2}>
        <div className={classes.formItem}>
          <Typography id="usernameError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            value={userInput.username}
            variant="outlined"
            name="username"
            label="Username"
            error={inputErrorState.userNameErrorState}
            helperText={inputError.userNameError}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                username: e.target.value,
              }))
            }
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="firstNameError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            variant="outlined"
            value={userInput.firstName}
            name="firstName"
            label="First Name"
            error={inputErrorState.firstNameErrorState}
            helperText={inputError.firstNameError}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                firstName: e.target.value,
              }))
            }
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="lastNameError"></Typography>
          <TextField
            fullWidth={true}
            type="text"
            value={userInput.lastName}
            variant="outlined"
            name="lastName"
            label="Last Name"
            error={inputErrorState.lastNameErrorState}
            helperText={inputError.lastNameError}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                lastName: e.target.value,
              }))
            }
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="emailError"></Typography>
          <TextField
            fullWidth={true}
            type="email"
            variant="outlined"
            value={userInput.email}
            name="email"
            label="Email"
            error={inputErrorState.emailErrorState}
            helperText={inputError.emailError}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </div>
        <div className={classes.formItem}>
          <Typography id="passwordError"></Typography>
          <TextField
            fullWidth={true}
            type="password"
            variant="outlined"
            value={userInput.password}
            name="password"
            label="Password"
            error={inputErrorState.passwordErrorState}
            helperText={inputError.passwordError}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                password: e.target.value,
              }))
            }
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
            value={userInput.confirmPassword}
            error={inputErrorState.confirmPasswordErrorState}
            helperText={inputError.confirmPasswordError}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                confirmPassword: e.target.value,
              }))
            }
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={e => handleSubmit(e)}
        >
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
