import React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import classes from "./Login.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
const defaultValues = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(defaultValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    //console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container className={classes.formContainer} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Login Form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              type="email"
              required
              value={formData.email}
              placeholder="abcd@xyz.com"
              onChange={handleChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              For new user please first <Link href="/auth/signup">signup</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default Login;
