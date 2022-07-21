import React, { useState } from "react";
import Feedback from "../../models/Feedback";
import db from "../../utils/db";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import classes from "../../styles/Feedback.module.css";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Feed } from "@mui/icons-material";
export default function FeedbackPage(props) {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("Avinash Kumar");
  const { feedbacks } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInput);
    try {
      const { data } = await axios.post("/api/info/feedback", {
        body: userInput,
        name: userName,
      });
      console.log(data);
      router.push("/thankyou");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Layout>
      <Box className={classes.mainCont}>
        <Box className={classes.container}>
          <Typography variant="h5" gutterBottom textAlign={"center"}>
            Share and Suggest
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              multiline
              minRows={5}
              fullWidth
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ margin: "10px 0" }}
            >
              Send
            </Button>
          </form>
        </Box>
        <Box className={classes.feedContainer}>
          <Typography color={"white"} variant="h4" textAlign={"center"}>
            Our User's Feedback{" "}
          </Typography>
          <List>
            {feedbacks.map((feedback) => {
              return (
                <ListItem key={feedback._id} className={classes.listItem}>
                  <ListItemAvatar className={classes.listAvatar}>
                    {feedback.name} (
                    {feedback.createdAt.toString().substring(0, 10)})
                  </ListItemAvatar>
                  <ListItemText className={classes.listText}>
                    {feedback.body}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  await db.connect();
  const feedbacks = await Feedback.find().lean();
  await db.disconnect();
  return {
    props: {
      feedbacks: JSON.parse(JSON.stringify(feedbacks)),
    },
  };
}
