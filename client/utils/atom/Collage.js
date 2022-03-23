import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList
      sx={{ miWidth: 300, height: 300, overflow: "hidden" }}
      cols={3}
      rowHeight={164}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  // {
  //   img: "https://i.ibb.co/z2LXxjY/dets.jpg",
  //   title: "Breakfast",
  // },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_5973-min.JPG",
    title: "Burger",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_5986-min.jpg",
    title: "Camera",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/detslogo1.jpg",
    title: "Coffee",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_5987-min.jpg",
    title: "Hats",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_6109-min.jpg",
    title: "Honey",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_6224-min.jpg",
    title: "Basketball",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_6811-min.JPG",
    title: "Fern",
  },
  {
    img: "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/detslogo1.jpg",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
