import React from "react";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import classes from "./Signup.module.css";
import Alert from "@mui/material/Alert";
import Link from "next/link";
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const defaultErrorValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const [formData, setFormData] = useState(defaultValues);
  const [formDataError, setFormDataError] = useState(defaultErrorValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    verifyFormData();
    console.log(formData);
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const verifyFormData = () => {
    if (formData.password.length < 6) {
      setFormDataError({
        ...defaultErrorValues,
        ["password"]: "Password length must be greater than 5",
      });
    }
    if (formData.password !== formData.confirmPassword) {
      setFormDataError({
        ...formDataError,
        ["confirmPassword"]: "Password do not matches",
      });
    }
  };
  return (
    <Layout title="Signup">
      <form onSubmit={handleSubmit} className={classes.formCont}>
        <Grid container spacing={3} className={classes.form}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Signup Form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              name="email"
              label="email"
              placeholder="abc@xyz.com"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
              error={false}
            />
          </Grid>
          <Grid item xs={12} className={classes.btn}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              If You Are already registered then{" "}
              <Link href="/auth/login">login</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default Signup;
