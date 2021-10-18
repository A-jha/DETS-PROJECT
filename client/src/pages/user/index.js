import React from "react"
import Layout from "../../components/Layout/index"
import { Typography, Grid, Stack, Avatar, Divider, Paper } from "@mui/material"
const User = ({ username, firstName, lastName, email }) => {
  return (
    <Layout>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4} sx={{ background: "rgba(100,200,100,.5)" }}>
          <Avatar
            alt={username || "U"}
            src="https://i.ibb.co/MDJBw2G/student.jpg"
            sx={{ width: 100, height: 100, margin: "1rem auto" }}
          />
          <Typography variant="h6" fontSize="2rem" align="center">
            #{username || "username"}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
            <Paper sx={{ margin: "1rem", padding: "2rem" }}>
              <Typography variant="h6" align="center">
                Student Card
              </Typography>
              <Divider />
              <div>
                <Typography>User Name: {username}</Typography>
                <Typography>
                  Name: {firstName || "Avinash"} {lastName || "jha"}
                </Typography>
                <Typography>Email: {email || "xyz@gmail.com"}</Typography>
              </div>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default User
