import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import "../../assets/styles/global.css"
const AllLinks = () => {
  const data = useStaticQuery(query)
  return (
    <List>
      {data.allFile.nodes.map((node, index) => {
        const img = getImage(node.childImageSharp.gatsbyImageData)
        return (
          <Link to={TitleLink[index].link} key={TitleLink[index].title}>
            <ListItem button>
              <ListItemIcon>
                <GatsbyImage image={img} alt={TitleLink[index].title} />
              </ListItemIcon>
              <ListItemText primary={TitleLink[index].title} />
            </ListItem>
          </Link>
        )
      })}
    </List>
  )
}

export default AllLinks
const query = graphql`
  {
    allFile(
      sort: { order: ASC, fields: absolutePath }
      filter: { ext: { ne: ".svg" }, sourceInstanceName: { eq: "images" } }
    ) {
      totalCount
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: TRACED_SVG
            width: 50
            height: 50
          )
        }
      }
    }
  }
`
const TitleLink = [
  { title: "Home", link: "/" },
  { title: "Notice", link: "/notice" },
  { title: "Alumni", link: "/students" },
  { title: "Chat", link: "/discuss" },
  { title: "Docs", link: "/docs" },
  { title: "Gallery", link: "/gallery" },
  { title: "Register", link: "/auth" },
  { title: "Events", link: "/festival" },
]
