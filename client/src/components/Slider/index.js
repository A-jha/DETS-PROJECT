import React, { useState } from "react"
import Slider from "./Slider"
import { makeStyles } from "@mui/styles"
import Img1 from "../../assets/sliderImg/07logo.jpeg"
import Img2 from "../../assets/sliderImg/small-logo.png"
import Img3 from "../../assets/sliderImg/strapi.png"
const Index = () => {
  const [num, setNum] = useState(0)
  const classes = useStyles()
  const currentSlide = sn => {
    console.log(sn)
    if (sn === 0) {
      return <Slider title={"Slide One"} Img={Img1} setNum={setNum} num={num} />
    } else if (sn === 1) {
      return <Slider title={"Slide two"} Img={Img2} setNum={setNum} num={num} />
    } else {
      return (
        <Slider title={"Slide three"} Img={Img3} setNum={setNum} num={num} />
      )
    }
  }
  return <div className={classes.sliderContainer}>{currentSlide(num)}</div>
}
export default Index

const useStyles = makeStyles(theme => ({
  sliderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 1rem 3rem 1rem",
  },
}))
