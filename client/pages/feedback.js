import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import classes from "../styles/feedback.module.css";
import { Grid, TextField, Button, Typography } from "@mui/material";
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
    </Layout>
  );
};

export default Feedback;
