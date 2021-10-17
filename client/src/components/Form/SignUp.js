import React, { useState } from "react"
import {
  Typography,
  TextField,
  Stack,
  Button,
  Select,
  MenuItem,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
const SignupForm = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    position: "",
  })

  const [inputErrorState, setInputErrorState] = useState({
    userNameErrorState: false,
    firstNameErrorState: false,
    lastNameErrorState: false,
    emailErrorState: false,
    passwordErrorState: false,
    confirmPasswordErrorState: false,
    positionErrorState: false,
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
    const formData = new FormData()
    setInputError({
      userNameError: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    })
    setInputErrorState({
      userNameErrorState: false,
      lastNameErrorState: false,
      firstNameErrorState: false,
      emailErrorState: false,
      passwordErrorState: false,
      confirmPasswordErrorState: false,
      positionErrorState: false,
    })
    try {
      console.log(userInput)
      const result = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: { "Content-Type": "application/json" },
      })
      const data = await result.json()
      console.log(data)
      console.log("handled")
      if (data.errors) {
        const errors = data.errors
        console.log(errors)
        if (errors.username) {
          setInputError(error1 => ({
            ...error1,
            userNameError: errors.username,
          }))
          setInputErrorState(error2 => ({
            ...error2,
            userNameErrorState: true,
          }))
        }
        if (errors.firstName) {
          setInputError(error1 => ({
            ...error1,
            firstNameError: errors.firstName,
          }))
          setInputErrorState(error2 => ({
            ...error2,
            firstNameErrorState: true,
          }))
        }
        if (errors.lastName) {
          setInputError(error1 => ({
            ...error1,
            lastNameError: errors.lastName,
          }))
          setInputErrorState(error2 => ({
            ...error2,
            lastNameErrorState: true,
          }))
        }
        if (errors.email) {
          setInputError(error1 => ({
            ...error1,
            emailError: errors.email,
          }))
          setInputErrorState(error2 => ({
            ...error2,
            emailErrorState: true,
          }))
        }
        if (errors.password) {
          setInputError(error1 => ({
            ...error1,
            passwordError: errors.password,
          }))
          setInputErrorState(error2 => ({
            ...error2,
            passwordErrorState: true,
          }))
        }
        if (errors.confirmPassword) {
          setInputError(error1 => ({
            ...error1,
            confirmPasswordError: errors.confirmPassword,
          }))
          setInputErrorState(error2 => ({
            ...error2,
            confirmPasswordErrorState: true,
          }))
        }
        if (errors.position) {
          setInputErrorState(error1 => ({
            ...error1,
            positionErrorState: true,
          }))
        }
      } else {
        window.location.href = "/"
      }
    } catch (error) {
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
          <Select
            value={userInput.position}
            onChange={e =>
              setUserInput(prevState => ({
                ...prevState,
                position: e.target.value,
              }))
            }
            error={inputErrorState.positionErrorState}
            className={classes.selectField}
          >
            <MenuItem value="student" selected>
              Student
            </MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
          </Select>
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
  selectField: {
    width: "100%",
  },
}))
