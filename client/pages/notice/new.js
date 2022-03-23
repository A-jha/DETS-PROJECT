import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import classes from "./New.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
const defaultValues = {
  title: "",
  content: "",
  date: "",
  link: "",
};
const NewNotice = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(defaultValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Form is submitted");
    router.replace("/notice");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Layout title="New Notice">
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <Grid container className={classes.formContainer} spacing={2}>
          <Grid item xs={12}>
            <Typography color="#000" align="center" variant="h4" py={3}>
              Please add Information Carefully
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              label="title"
              required
              fullWidth
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              label="Content"
              required
              fullWidth
              multiline
              rows={6}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="link"
              fullWidth
              name="link"
              label="additional Link"
              value={formData.link}
              onChange={handleChange}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default NewNotice;
