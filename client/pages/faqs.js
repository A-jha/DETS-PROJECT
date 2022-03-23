import React from "react";
import Layout from "../components/layout/Layout";
import { Typography, Grid } from "@mui/material";
import DocCard from "../components/util/DocCard";
const Docs = () => {
  const data = {
    name: "Book",
    author: "Avinash",
    link: "www.xxx.com",
  };
  return (
    <Layout>
      <Grid container>
        <Grid item p={5} xs={12} md={6}>
          <DocCard data={data} />
        </Grid>
        <Grid item p={5} xs={12} md={6}>
          <DocCard data={data} />
        </Grid>
        <Grid item p={5} xs={12} md={6}>
          <DocCard data={data} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Docs;
