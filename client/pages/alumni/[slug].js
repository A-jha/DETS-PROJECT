import React from "react";
import Student from "../../models/Student";
import db from "../../utils/db";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import {
  Avatar,
  Grid,
  Typography,
  Box,
  Card,
  CardHeader,
  Link,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { EmailRounded, GitHub } from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import classes from "../../styles/User.module.css";

const UserProfile = (props) => {
  const router = useRouter();
  const { student } = props;

  if (!student) {
    router.push("/not-found");
  }
  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.heading}>
          <Typography textAlign={"center"} variant="h4" color="white">
            {student.name}
          </Typography>
          <div className={classes.bottomBar}></div>
        </Grid>
        <Grid item md={4} xs={11} className={classes.profileHeader}>
          <Typography
            textAlign={"center"}
            fontWeight={800}
            sx={{ padding: "10px" }}
          >
            Department Of Engineering And Technological Studies
          </Typography>
          <Avatar
            children={
              <Image
                src="https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/detslogo1.jpg"
                width="150"
                height="150"
              />
            }
            className={classes.avatar}
            sx={{ width: "150px", height: "150px" }}
          ></Avatar>
          <Box className={classes.personalDetails}>
            <Typography variant="h4" color="white">
              {student.name}
            </Typography>
            <Typography color={"whitesmoke"}>@{student.slug}</Typography>
            <Typography>
              {student.yearIn} to {student.yearOut}
            </Typography>
          </Box>
          <Box className={classes.socialLinks}>
            <NextLink
              href={student.social[0].link ? student.social[0].link : ""}
              passHref
            >
              <Link sx={{ padding: "10px" }} target="_blank">
                <GitHub sx={{ color: "black", fontSize: "3rem" }} />
              </Link>
            </NextLink>
            <NextLink
              href={student.social[1].link ? student.social[1].link : "#"}
              passHref
            >
              <Link sx={{ padding: "10px" }} target="_blank">
                <LinkedIn sx={{ color: "blue", fontSize: "3rem" }} />
              </Link>
            </NextLink>
            <NextLink href={`mailto:${student.email}`} passHref>
              <Link sx={{ padding: "10px" }} target="_blank">
                <EmailRounded sx={{ color: "#fc1111", fontSize: "3rem" }} />
              </Link>
            </NextLink>
          </Box>
        </Grid>
        <Grid item md={7} xs={12} className={classes.detailsContainer}>
          <Box className={classes.about}>
            <Typography>{student.about}</Typography>
          </Box>
          <Box>
            <Card>
              {student.jobs.map((job, index) => {
                return <Typography>{job.title} jnkj</Typography>;
              })}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default UserProfile;
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  console.log(slug);
  await db.connect();
  const student = await Student.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      student: JSON.parse(JSON.stringify(student)),
    },
  };
}
