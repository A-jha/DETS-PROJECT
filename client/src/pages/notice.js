import React from "react"
import Layout from "../components/Layout/index"
import Notice from "../components/Form/Notice"
import { Typography } from "@mui/material"
import Card from "../components/Card/index"
const Notifications = () => {
  return (
    <Layout>
      <Notice />
      <Card
        username={"Avinash"}
        title={"We are going to make this Happen"}
        description={"We are creating this we site"}
        article={
          "DETS has many potentially great students they worked harder and got admitted in good IIT's, NIT's and IIIT's too"
        }
      />
    </Layout>
  )
}

export default Notifications
