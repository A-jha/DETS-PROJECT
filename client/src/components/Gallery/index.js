import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { makeStyles } from "@mui/styles"
import { Paper } from "@mui/material"
import { ZoomIn } from "../FramerMotion/Simple"
const Collage = () => {
  const data = useStaticQuery(query)
  console.log(data.allFile.nodes[0].childImageSharp)
  const classes = useStyles()
  return (
    <Paper className={classes.imgContainer} elevation={10}>
      {data.allFile.nodes?.map((node, index) => {
        const img = getImage(node.childImageSharp)
        return (
          <Paper
            key={index}
            className={classes.singleImgContainer}
            elevation={4}
          >
            <ZoomIn>
              <GatsbyImage image={img} alt={node.name} loading="lazy" />
            </ZoomIn>
          </Paper>
        )
      })}
    </Paper>
  )
}

export default Collage

const query = graphql`
  {
    allFile(
      filter: { ext: { ne: ".svg" }, sourceInstanceName: { eq: "gallery" } }
    ) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            height: 300
            placeholder: TRACED_SVG
            width: 300
            backgroundColor: "black"
          )
        }
        dir
        sourceInstanceName
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  imgContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "#ebecbe",
  },
  singleImgContainer: {
    margin: "1rem",
    padding: "1rem !important",
    background: "#f1faf0",
  },
}))
