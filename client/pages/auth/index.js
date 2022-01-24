import React from "react";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import classes from "./Index.module.css";
import Link from "next/link";
const Auth = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={classes.admin}>
          <Card
            sx={{ padding: "20px", margin: "20px" }}
            className={classes.userCard}
          >
            <Typography variant="h4">For Officials</Typography>
            <Typography variant="body1"></Typography>
            <Link href="auth/signup">
              <Button variant="contained" color="primary" sx={{ margin: 1 }}>
                Signup
              </Button>
            </Link>
            <Link href="auth/login">
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className={classes.user}>
          <Card
            sx={{ padding: "20px", margin: "20px" }}
            className={classes.userCard}
          >
            <Typography variant="h4">For Students</Typography>
            <Typography variant="body1"></Typography>
            <Link href="auth/signup">
              <Button variant="contained" color="primary" sx={{ margin: 1 }}>
                Signup
              </Button>
            </Link>
            <Link href="auth/login">
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Auth;
