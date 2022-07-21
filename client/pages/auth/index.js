import { Grid, Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout/Layout";
import classes from "../../styles/Auth.module.css";
export default function Index() {
  const router = useRouter();
  const handleStudentClick = () => {
    router.push("/auth/student/login/");
  };
  const handleAdminClick = () => {
    router.push("/auth/admin/login");
  };
  return (
    <Layout>
      <Grid
        container
        spacing={1}
        flex
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ backgroundColor: "white", margin: "1rem" }}
        >
          <Box className={classes.heading}>
            <Typography align="center" variant="h4">
              Administration Login
            </Typography>
            <div className={classes.bottomBar}></div>
          </Box>

          <Box className={classes.signupButton}>
            <Button variant="outlined" fullWidth onClick={handleAdminClick}>
              Signup & deliver
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ backgroundColor: "white", margin: "1rem" }}
        >
          <Box className={classes.heading}>
            <Typography align="center" variant="h4">
              Student Login
            </Typography>
            <div className={classes.bottomBar}></div>
          </Box>
          <Box className={classes.signupButton}>
            <Button onClick={handleStudentClick} fullWidth variant="outlined">
              Signup & enjoy
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
