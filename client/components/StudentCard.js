import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import classes from "../styles/StudentCard.module.css";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const StudentCard = ({ student }) => {
  return (
    <Paper className={classes.studentCard}>
      <Box className={classes.header}>
        <Avatar>{student.name[0]}</Avatar>
        <div>
          <Typography>{student.name}</Typography>
          <Typography>{student.slug}</Typography>
        </div>
      </Box>
      <Typography>{student.about}</Typography>
      <Typography>
        {student.yearIn} to {student.yearOut}
      </Typography>
      <Box className={classes.social}>
        <LinkedIn />
        <Instagram />
        <Facebook />
        <GitHub />
      </Box>
      <Button>View More</Button>
    </Paper>
  );
};
export default StudentCard;
