import React from "react"
import Layout from "../../components/Layout/index"
import { Link } from "gatsby"
import { Typography, Grid, Button } from "@mui/material"
import Card from "../../components/Card/index"
const Notifications = () => {
  return (
    <Layout title={"Notice"}>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          mt={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" align="center">
            All Notice
          </Typography>
          <div
            style={{
              width: "120px",
              height: "10px",
              background: "black",
              border: "2px solid yellow",
              borderRadius: "1rem",
            }}
          ></div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/notice/new">
            <Button variant="contained" color="success">
              Add New
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          spacing={2}
        >
          <Card
            username={"Avinash"}
            title={"We are going to make this Happen"}
            description={"We are creating this we site"}
            article={
              "DETS has many potentially great students they worked harder and got admitted in good IIT's, NIT's and IIIT's too"
            }
          />
          <Card
            username={"Avinash"}
            title={"We are going to make this Happen"}
            description={"We are creating this we site"}
            article={
              "DETS has many potentially great students they worked harder and got admitted in good IIT's, NIT's and IIIT's too"
            }
          />
          <Card
            username={"Avinash"}
            title={"We are going to make this Happen"}
            description={"We are creating this we site"}
            article={
              "DETS has many potentially great students they worked harder and got admitted in good IIT's, NIT's and IIIT's too"
            }
          />
          <Card
            username={"Avinash"}
            title={"We are going to make this Happen"}
            description={"We are creating this we site"}
            article={
              "DETS has many potentially great students they worked harder and got admitted in good IIT's, NIT's and IIIT's too"
            }
          />
          <Card
            username={"Avinash"}
            title={"We are going to make this Happen"}
            description={"We are creating this we site"}
            article={
              "DETS has many potentially great students they worked harder and got admitted in good IIT's, NIT's and IIIT's too"
            }
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Notifications
