import {
  Grid,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";
import classes from "../../../styles/Login.module.css";
export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <Box className={classes.loginCont}>
        <form onSubmit={submitHandler} className={classes.loginForm}>
          <Typography sx={{ padding: "10px" }} variant="h4">
            Login
          </Typography>
          <div className={classes.bottomBar}></div>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <Typography>{email}</Typography>
            </ListItem>

            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: "password" }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Typography>{password}</Typography>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Login
              </Button>
            </ListItem>
          </List>
        </form>
      </Box>
    </Layout>
  );
}
