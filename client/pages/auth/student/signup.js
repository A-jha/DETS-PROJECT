import {
  Grid,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Layout from "../../../components/layout/Layout";
import classes from "../../../styles/Login.module.css";
import { Store } from "../../../utils/Store";
import axios from "axios";
import NextLink from "next/link";
import Cookies from "js-cookie";
import { DateRange } from "@mui/icons-material";
export default function Index() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (userInfo) {
    router.push("/");
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stream, setStream] = useState("I.T.");
  const [yearIn, setYearIn] = useState("12-10-2020");
  const [yearOut, setYearOut] = useState(2022);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      alert("Password did not match");
      return;
    }
    try {
      const { data } = await axios.post("/api/alumni/signup", {
        name,
        email,
        password,
        stream,
        yearIn,
        yearOut,

        confPassword,
      });
      console.log(name, email, stream, yearIn, yearOut, password, confPassword);
      router.push("/");
    } catch (err) {
      console.log(email, password, err);
      alert(err.response.data ? err.response.message : err.message);
      router.push("/");
    }
  };

  return (
    <Layout>
      <Box className={classes.loginCont}>
        <form onSubmit={submitHandler} className={classes.loginForm}>
          <Typography sx={{ padding: "10px" }} variant="h4">
            Signup
          </Typography>
          <div className={classes.bottomBar}></div>
          <List>
            <ListItem></ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                inputProps={{ type: "text" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                value={email}
                inputProps={{ type: "email" }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel>Stream</InputLabel>
                <Select
                  value={stream}
                  label="Stream"
                  onChange={(e) => setStream(e.target.value)}
                >
                  <MenuItem value={"I.T"}>I.T.</MenuItem>
                  <MenuItem value={"E.I.E"}>E.I.E</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <TextField
                  type={"date"}
                  value={yearIn}
                  label="Year In"
                  onChange={(e) => {
                    setYearIn(e.target.value.toString());
                  }}
                ></TextField>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <TextField
                  type={"date"}
                  value={yearOut}
                  label="Year Out"
                  onChange={(e) => {
                    setYearOut(e.target.value.toString());
                  }}
                ></TextField>
              </FormControl>
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
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Confirm Password"
                inputProps={{ type: "password" }}
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Signup
              </Button>
            </ListItem>
          </List>
          <Typography textAlign="center" gutterBottom>
            If you are already registered{" "}
            <NextLink href="/auth/student/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </Typography>
        </form>
      </Box>
    </Layout>
  );
}
