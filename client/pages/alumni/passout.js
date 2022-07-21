import {
  Avatar,
  CardHeader,
  Card,
  Grid,
  Typography,
  Box,
  Divider,
  Badge,
  Link,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Student from "../../models/Student";
import db from "../../utils/db";
import { BadgeOutlined, LinkedIn } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";
const FirstYear = (props) => {
  const router = useRouter();
  const { students } = props;
  const currentYear = new Date().getFullYear().toString();
  const firstYear = students.filter(
    (student) => parseInt(currentYear) - parseInt(student.yearIn) > 4
  );
  const handleClick = (slug) => {
    router.push(`/alumni/${slug}`);
  };
  return (
    <Layout>
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
        >
          {firstYear.map((student) => {
            return (
              <Card
                key={student._id}
                sx={{ margin: "1rem", padding: "10px", width: "400px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: "50px", height: "50px", margin: "10px" }}
                  >
                    {student.name[0]}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={800}>{student.name}</Typography>
                    <Typography component="span">{student.about}</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}></Box>
                </Box>
                <Divider />
                {student.stream ? (
                  <Box>
                    <Typography component={"span"} fontWeight={900}>
                      Stream:{" "}
                    </Typography>
                    <Typography component={"span"}>{student.stream}</Typography>
                  </Box>
                ) : (
                  ""
                )}
                <Box>
                  <Typography component="span" fontWeight="900">
                    Skills:
                  </Typography>
                  {student.skills.map((skill) => {
                    return (
                      <Typography component={"span"}>{skill.name}, </Typography>
                    );
                  })}
                </Box>
                <Box>
                  <Typography component="span" fontWeight={900}>
                    Course Duration:
                  </Typography>
                  <Typography component="span">
                    {student.yearIn} to {student.yearOut}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={900}>Contact Info:</Typography>
                  <NextLink href={student.social[0].link} passHref>
                    <Link>
                      <GitHub sx={{ color: "black", fontSize: "3rem" }} />
                    </Link>
                  </NextLink>
                  <NextLink href={student.social[1].link} passHref>
                    <Link>
                      <LinkedIn sx={{ color: "blue", fontSize: "3rem" }} />
                    </Link>
                  </NextLink>
                </Box>
                <Button
                  onClick={() => handleClick(student.slug)}
                  fullWidth
                  variant="contained"
                >
                  Visit Profile
                </Button>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps() {
  await db.connect();
  const students = await Student.find({}).lean();
  await db.disconnect();
  return {
    props: {
      students: JSON.parse(JSON.stringify(students)),
    },
  };
}

export default FirstYear;
