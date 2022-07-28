import { Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/layout/Layout";
import classes from "../../styles/Events.module.css";
const Navtara = () => {
  return (
    <Layout>
      <Grid className={classes.mainCont}>
        <Typography color={"white"} p={3}>
          There is an old proverb “If you are in Rome, be like a Roman.”
          Department of Engineering and Technological Studies celebrates
          NAVATARA as a welcome party to newcomers and make it to be friendly.
          This programme helps in breaking the ice between the newcomer and
          their Departmental Senior. Our Head of Department, Correspondent and
          Founder give their valuable speech which makes the junior feel
          Welcome, Comfortable and encouragement. The programme is to be avoid
          social evil to encourage the newcomer's creative and to boost their
          confidence.
        </Typography>
      </Grid>
    </Layout>
  );
};

export default Navtara;
