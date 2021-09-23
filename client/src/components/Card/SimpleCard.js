import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function SimpleCard({ title, img, about }) {
  return (
    <Card sx={{ maxWidth: 800, margin: 2 }} elevation={4}>
      <CardMedia
        component="img"
        alt="hod-img"
        sx={{ imageOrientation: "from-image", padding: ".5rem" }}
        height="300"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} {about.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {about.words}
        </Typography>
        <Typography variant="h6" align="center">
          "{about.moto}"
        </Typography>
        <Typography variant="h6" align="center">
          experience of {about.experience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  )
}
