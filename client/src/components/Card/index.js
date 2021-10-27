import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "gatsby"
const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function CustomCard({
  username,
  createdAt,
  imgLink,
  title,
  description,
  article,
}) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username.substr(0, 1) || "U"}
          </Avatar>
        }
        action={
          <Link to="/notice/update/">
            <IconButton>
              <EditIcon color="success" />
            </IconButton>
          </Link>
        }
        title={username || "User Name"}
        subheader={createdAt || new Date().toDateString()}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.the-sun.com/wp-content/uploads/sites/6/2021/01/NINTCHDBPICT000631473461.jpg"
        alt="Notice-Img"
      />
      <CardContent>
        <Typography variant="h6">{title || "Simple Title"}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description || "Description"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{article || "Article"}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
