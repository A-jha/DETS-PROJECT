import React from "react";
import { Typography, Card } from "@mui/material";
const DocCard = ({ data }) => {
  return (
    <Card sx={{ padding: "30px" }}>
      <Typography variant="h3">{data.name}</Typography>
      <Typography variant="h5">{data.author}</Typography>
    </Card>
  );
};

export default DocCard;
