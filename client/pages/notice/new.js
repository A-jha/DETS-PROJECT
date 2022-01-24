import React, { useState } from "react";
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
const defaultValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  startYear: "",
  endYear: "",
  gender: 0,
  photo: "",
  password: "",
  confirmPassword: "",
};
const NewNotice = () => {
  const [formData, setFormData] = useState(defaultValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
  };

  const handleChange = (e) => {
    const { name, values } = e.target;
    setFormData({
      ...formData,
      [name]: values,
    });
  };
  return (
    <Layout title="New Notice">
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container className={classes.formContainer} spacing={2}>
          <Grid item xs={12}>
            <Typography color="#fff" align="center" variant="h4" py={3}>
              Please add Information Carefully
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              label="First Name"
              required
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="lastName"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              label="Last Name"
              required
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              label="Contact Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              required
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="StartYear"
              value={formData.startYear}
              onChange={handleChange}
              label="Starting Year"
              required
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="endYear"
              value={formData.endYear}
              onChange={handleChange}
              label="End Year"
              required
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              name="endYear"
              value={formData.endYear}
              onChange={handleChange}
              label="End Year"
              required
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleChange}
                className={classes.radioGroup}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Believe in equality"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField type="link"></TextField>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default NewNotice;
