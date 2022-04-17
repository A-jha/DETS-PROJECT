import React from "react";
import Layout from "../../components/layout/Layout";
import { Typography, Grid, Divider } from "@mui/material";
import DocCard from "../../components/util/DocCard";
import classes from "./Index.module.css";
const Docs = () => {
  const data = {
    name: "Book",
    author: "Avinash",
    link: "www.xxx.com",
  };
  return (
    <Layout>
      <Grid container>
        <Grid item p={5} xs={12} md={6} className={classes.newsContainer}>
          <Typography variant="h4" align="center">
            News
          </Typography>
          <Divider variant="middle" />
        </Grid>
        <Grid item p={5} xs={12} md={6} className={classes.eventContainer}>
          <Typography variant="h4" align="center">
            Events
          </Typography>
          <Divider variant="middle" />
          <Grid container>
            <Grid item xs={12} md={6} xl={4}>
              <Typography>Hi</Typography>
            </Grid>

            <Grid item xs={12} md={6} xl={4}>
              <Typography>Hi</Typography>
            </Grid>

            <Grid item xs={12} md={6} xl={4}>
              <Typography>Hi</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

const news = [
  {
    title: "Prayukti",
    Description:
      'One of the most awaiting Event in which all the alumni of "DETS" come together and celebrate their success and share a lot of experiences and guid their juniors towards their goal. Each and every students are delighted and filled with joy.',
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/prayukti.jpg",
    link: "/prayukti",
  },
  {
    title: "Prayukti",
    Description:
      'One of the most awaiting Event in which all the alumni of "DETS" come together and celebrate their success and share a lot of experiences and guid their juniors towards their goal. Each and every students are delighted and filled with joy.',
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/prayukti.jpg",
    link: "/prayukti",
  },
  {
    title: "Prayukti",
    Description:
      'One of the most awaiting Event in which all the alumni of "DETS" come together and celebrate their success and share a lot of experiences and guid their juniors towards their goal. Each and every students are delighted and filled with joy.',
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/prayukti.jpg",
    link: "/prayukti",
  },
  {
    title: "Prayukti",
    Description:
      'One of the most awaiting Event in which all the alumni of "DETS" come together and celebrate their success and share a lot of experiences and guid their juniors towards their goal. Each and every students are delighted and filled with joy.',
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/prayukti.jpg",
    link: "/prayukti",
  },
];
export default Docs;
