import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { MongoClient } from "mongodb";
import classes from "../styles/feedback.module.css";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { useRouter } from "next/router";
import Carousel from "react-material-ui-carousel";
import Forward from "@mui/icons-material/Send";
let defaultVal = {
  username: "Avinash",
  feedback: "",
};
const Feedback = ({ feedbacks }) => {
  const router = useRouter();
  const [feedbackText, setFeedbackText] = useState(defaultVal);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(feedbackText.feedback);
    setFeedbackText({ ...feedbackText, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/newFeedback", {
      method: "POST",
      body: JSON.stringify(feedbackText),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    await router.push("/thankyou");
  };

  return (
    <Layout title={"Feedback"}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" fontWeight={900}>
              We Value Your Feedback
            </Typography>
          </Grid>
          <Grid item className={classes.feedback}>
            <TextField
              type="text"
              variant="outlined"
              value={feedbackText.feedback}
              multiline
              onChange={handleChange}
              label="Feedback"
              required
              name="feedback"
              fullWidth
              rows={8}
            ></TextField>
          </Grid>
          <Grid item className={classes.buttonContainer}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
              <Forward sx={{ marginLeft: "10px" }} />
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container>
        <Grid item xs={12} className={classes.carouselContainer}>
          <Typography align="center" variant="h4" color="white" gutterBottom>
            Recent Feedbacks
          </Typography>
          <Carousel cycleNavigation swipe className={classes.carousel}>
            {feedbacks.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Layout>
  );
};
function Item(props) {
  return (
    <Paper className={classes.feedbackCard}>
      <div className={classes.feedbackAvatar}>
        <Avatar
          alt={props.item.username}
          src={
            "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/alumni3.JPG"
          }
          sx={{ marginRight: "10px" }}
        ></Avatar>
        <Typography variant="h5" textAlign={"center"} fontWeight={900}>
          {props.item.username}
        </Typography>
      </div>
      <p>{props.item.feedback}</p>
    </Paper>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    //this is an api route so code will never come on the client side
    "mongodb+srv://avinash:detsConnect@cluster0.ctscs.mongodb.net/detsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const feedbackCollection = db.collection("Feedback");
  const feedbacks = await feedbackCollection.find().toArray();
  //console.log(notices);
  client.close();
  return {
    props: {
      feedbacks: feedbacks.map((feedback) => ({
        username: feedback.username,
        feedback: feedback.feedback,
        id: feedback._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Feedback;
