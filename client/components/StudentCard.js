import { Avatar, Button, Paper, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import classes from "../styles/StudentCard.module.css";
import NextLink from "next/link";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const StudentCard = ({ student }) => {
  return (
    <Paper className={classes.studentCard}>
      <Box className={classes.header}>
        <Avatar className={classes.avatar}>{student.name[0]}</Avatar>
        <div className={classes.studentHeader}>
          <Typography variant="h6" textAlign="center">
            {student.name}
          </Typography>
          <Typography>{student.slug}</Typography>
        </div>
      </Box>
      <Typography sx={{ margin: "10px" }}>{student.about}</Typography>
      <Typography sx={{ margin: "10px" }}>
        {student.yearIn} to {student.yearOut}
      </Typography>
      <Box className={classes.social} sx={{ margin: "10px" }}>
        <LinkedIn />
        <Instagram />
        <Facebook />
        <GitHub />
      </Box>
      <NextLink href={"alumni/" + student.slug} passHref>
        <Link>View More</Link>
      </NextLink>
    </Paper>
  );
};
export default StudentCard;
