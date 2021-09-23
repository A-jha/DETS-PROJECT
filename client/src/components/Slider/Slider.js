import React from "react"
import { Paper, Typography, IconButton } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { NavigateNext, NavigateBefore } from "@mui/icons-material"
const Slider = ({ title, Img, setNum, num }) => {
  const classes = useStyles()

  function handlePrev() {
    if (num > 0) {
      setNum(num - 1)
    } else {
      setNum(2)
    }
  }
  function handleNext() {
    if (num < 2) {
      setNum(num + 1)
    } else {
      setNum(0)
    }
  }
  return (
    <Paper className={classes.slide} style={{ backgroundImage: `url(${Img})` }}>
      <div className={classes.slideContent}>
        <Typography variant="h4">{title}</Typography>
      </div>

      <div className={classes.slideNavigator}>
        <IconButton onClick={() => handlePrev()} className={classes.prevBtn}>
          <NavigateBefore />
        </IconButton>
        <IconButton onClick={() => handleNext()} className={classes.nextBtn}>
          <NavigateNext />
        </IconButton>
      </div>
    </Paper>
  )
}

export default Slider

const useStyles = makeStyles(theme => ({
  slide: {
    maxWidth: 1000,
    height: 400,
    flex: 1,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: ".5rem",
    borderRadius: "1rem",
    "&:hover": {
      opacity: [0.9],
    },
  },
  slideContent: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    color: "white",
    height: "90%",
  },
  sliderImage: {
    height: 380,
    alignContent: "center",
  },
  slideNavigator: {
    alignSelf: "center",
    color: "#fff",
    display: "flex",
  },
  nextBtn: {
    marginLeft: "auto",
    color: "white",
    background: "rgba(220,110,45,.6)",
  },
  prevBtn: {
    color: "white",
    background: "rgba(220,110,45,.6)",
  },
}))
