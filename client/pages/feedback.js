import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import classes from "../styles/feedback.module.css";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Forward from "@mui/icons-material/Send";
const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const handleSubmit = (e) => {};
  const handleChange = (e) => {
    setFeedbackText(e.target.value);
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
              value={feedbackText}
              multiline
              onChange={handleChange}
              label="Feedback"
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
            {carouselItems.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Layout>
  );
};
var carouselItems = [
  {
    name: "Avinash Sharma",
    feedback:
      "Everything is looking good but something is missing and celebrate and reunite with each other guys. Department of engineering and technological studies. Har Har Mahadev ",
  },
  {
    name: "Hritik Raj",
    feedback:
      "We are having some good and hard time together in this time period we all have to come together and show the unity of Department of engineering and technological studies. Har Har Mahadev ",
  },
];
function Item(props) {
  return (
    <Paper className={classes.feedbackCard}>
      <div className={classes.feedbackAvatar}>
        <Avatar
          alt={props.item.name}
          src={
            "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/alumni3.JPG"
          }
          sx={{ marginRight: "10px" }}
        ></Avatar>
        <Typography variant="h5" textAlign={"center"} fontWeight={900}>
          {props.item.name}
        </Typography>
      </div>
      <p>{props.item.feedback}</p>
    </Paper>
  );
}
export default Feedback;
