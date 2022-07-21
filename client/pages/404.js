import React from "react";
import Layout from "../components/layout/Layout";
import Typography from "@mui/material/Typography";
import classes from "../styles/Error.module.css";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
const hello = () => {
  const router = useRouter();
  return (
    <Layout>
      <Grid container className={classes.main}>
        {/* <Grid item xs={12} className={classes.err}>
          <Alert severity="error">Page Not found!</Alert>
        </Grid>
        <Grid item xs={12} className={classes.errorCont}>
          <Typography variant="h2" align="center">
            4<span className={classes.o}>0</span>4
          </Typography>
        </Grid> */}
        <Grid item xs={12} className={classes.imgContainer}>
          <Typography variant="h3" color={"white"}>
            404: Not Found :(
          </Typography>
          <Button onClick={() => router.push("/")}>Home Page</Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default hello;
