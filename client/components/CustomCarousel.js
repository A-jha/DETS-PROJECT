import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "../styles/Carousel.module.css";
const CustomCarousel = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, i) => {
        console.log(item);
        return <Item item={item} key={i} />;
      })}
    </Carousel>
  );
};

const Item = ({ item }) => {
  console.log(item);
  return (
    <>
      <Paper className={classes.carouselCont}>
        <div className={classes.details}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
        <div className={classes.image}>
          <img src={item.img} alt={item.title} />
        </div>
      </Paper>
    </>
  );
};
export default CustomCarousel;
