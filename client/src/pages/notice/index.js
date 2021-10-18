import React from "react"
import Layout from "../../components/Layout/index"
import Notice from "../../components/Form/Notice"
import { Typography, Grid } from "@mui/material"
import Card from "../../components/Card/index"
const Notifications = () => {
  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Notice />
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
