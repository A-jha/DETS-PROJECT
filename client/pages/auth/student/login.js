import {
  Grid,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  TextField,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Layout from "../../../components/layout/Layout";
import classes from "../../../styles/Login.module.css";
import { Store } from "../../../utils/Store";
import axios from "axios";
import Cookies from "js-cookie";
import NextLink from "next/link";
export default function Index() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (userInfo) {
    router.push("/");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/alumni/login", {
        email,
        password,
      });
      await console.log(data);
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      console.log(data);
      alert("Success Login");
      router.push("/");
    } catch (err) {
      console.log(email, password, err);
      alert(err.response.data ? err.response.data.message : err.message);
    }
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
          <Typography textAlign="center" gutterBottom>
            If you are not registered{" "}
            <NextLink href="/auth/student/signup" passHref>
              <Link>Register</Link>
            </NextLink>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
}
