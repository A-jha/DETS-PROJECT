import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";
import classes from "./Index.module.css";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// mongodb client will end up as server side bundle
import { MongoClient } from "mongodb";
const Notice = ({ notices }) => {
  // const [notices, setNotices] = useState([]);
  // useEffect(() => {
  //   setNotices(getStaticProps());
  // }, []);
  notices.reverse();
  console.log(notices.length);
  return (
    <Layout title="Notice">
      <Grid container className={classes.section}>
        <Grid item xs={12} className={classes.section1}>
          <Typography color="#fff" variant="h3" align="center" p={2}>
            All Notice
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section2}>
          <Link href="/notice/new/">
            <Button variant="contained">Add New</Button>
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.section3}>
          {notices.map((notice) => {
            return (
              <Paper className={classes.noticeCard}>
                <Typography variant="h6">{notice.title}</Typography>
                <Divider />
                <Typography gutterBottom>{notice.date}</Typography>
                <Typography>{notice.content}</Typography>
                <a href={notice.link} target="_blank">
                  <Typography variant="overline">{notice.link}</Typography>
                </a>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    //this is an api route so code will never come on the client side
    "mongodb+srv://avinash:detsConnect@cluster0.ctscs.mongodb.net/detsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const noticeCollection = db.collection("Notice");
  const notices = await noticeCollection.find().toArray();
  //console.log(notices);
  client.close();
  return {
    props: {
      notices: notices.map((notice) => ({
        title: notice.title,
        content: notice.content,
        date: notice.date,
        link: notice.link,
        id: notice._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default Notice;
