import React from "react";
import Layout from "../components/layout/Layout";
import { Typography, Grid } from "@mui/material";
import DocCard from "../components/util/DocCard";
const Docs = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item p={5} xs={12} md={6}>
          <DocCard />
        </Grid>
        <Grid item p={5} xs={12} md={6}>
          <DocCard />
        </Grid>
        <Grid item p={5} xs={12} md={6}>
          <DocCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Docs;
