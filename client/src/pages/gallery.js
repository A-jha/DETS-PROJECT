import React from "react"
import Layout from "../components/Layout/index"
import Photos from "../components/Gallery/index"
import { Typography } from "@mui/material"
import ColorPile from "../components/particals/colorPile"

const Gallery = () => {
  return (
    <Layout title={"memories"}>
      <Typography
        align="center"
        variant="h4"
        sx={{ margin: "2rem 1rem 1rem .2rem" }}
      >
        Memories
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 2rem 2rem 2rem ",
        }}
      >
        <ColorPile />
      </div>
      <Photos />
    </Layout>
  )
}

export default Gallery
