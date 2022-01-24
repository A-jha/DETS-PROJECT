import React, { useEffect } from "react";
import classes from "./BottomBar.module.css";
const BottomBar = ({ width, height }) => {
  const setColor = () => {
    const colors = [
      "#f92a82",
      "#fff",
      "#849483",
      "#fcba03",
      "#12d73f",
      "#faaa05",
      "#f92a82",
      "#7ef77f",
      "#84a483",
      "#fc1203",
      "#12cf3f",
      "#faf1f5",
    ];
    const c1 = document.getElementById("c1");
    c1.style.background = colors[Math.ceil(Math.random() * 12)];
    const c2 = document.getElementById("c2");
    c2.style.background = colors[Math.ceil(Math.random() * 12)];
    const c3 = document.getElementById("c3");
    c3.style.background = colors[Math.ceil(Math.random() * 12)];
    const c4 = document.getElementById("c4");
    c4.style.background = colors[Math.ceil(Math.random() * 12)];
    const c5 = document.getElementById("c5");
    c5.style.background = colors[Math.ceil(Math.random() * 12)];
    const c6 = document.getElementById("c6");
    c6.style.background = colors[Math.ceil(Math.random() * 12)];
  };
  useEffect(() => {
    setColor();
  }, []);
  return (
    <div className={classes.container}>
      <div id="c1" className={classes.c}></div>
      <div id="c2" className={classes.c} width={width} height={height}></div>
      <div id="c3" className={classes.c} width={width} height={height}></div>
      <div id="c4" className={classes.c} width={width} height={height}></div>
      <div id="c5" className={classes.c} width={width} height={height}></div>
      <div id="c6" className={classes.c} width={width} height={height}></div>
    </div>
  );
};

export default BottomBar;
