import { Grid, List, ListItem, Link } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";
import classes from "../../styles/Sitemap.module.css";
export default function Sitemap() {
  return (
    <Layout>
      <Grid className={classes.container}>
        <div className={classes.temp}>
          <ul className={classes.topList}>
            {links.map((link, index) => {
              return (
                <li>
                  <NextLink href={link.link} passHref>
                    <Link> {link.name}</Link>
                  </NextLink>
                  <ul className={classes.inList}>
                    {link.subLink &&
                      link.subLink.map((subLink, index) => {
                        return (
                          <li>
                            <NextLink href={subLink.link} passHref>
                              <Link>{subLink.name}</Link>
                            </NextLink>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </Grid>
    </Layout>
  );
}

const links = [
  {
    name: "Home",
    link: "/",
    subLink: [
      {
        name: "Alumni",
        link: "/alumni/",
      },
      {
        name: "Info",
        link: "/info/",
      },
      {
        name: "Events",
        link: "/events/",
      },
    ],
  },
  {
    name: "Alumni",
    link: "/alumni/",
    subLink: [
      {
        name: "FirstYear",
        link: "/alumni/firstyear/",
      },
      {
        name: "SecondYear",
        link: "/alumni/secondyear/",
      },
      {
        name: "ThirdYear",
        link: "/alumni/Thirdyear/",
      },
      {
        name: "FourthYear",
        link: "/alumni/fourthyear/",
      },
      {
        name: "Passout",
        link: "/alumni/passout/",
      },
    ],
  },
  {
    name: "Info",
    link: "/info/",
    subLink: [
      {
        name: "Faqs",
        link: "/info/faqs/",
      },
      {
        name: "Feedback",
        link: "/info/feedback/",
      },
      {
        name: "Notice",
        link: "/info/notice/",
      },
      {
        name: "Sitemap",
        link: "/info/sitemap",
      },
    ],
  },
  {
    name: "Events",
    link: "/events/",
    subLink: [
      {
        name: "Prayukti",
        link: "/events/Prayukti",
      },
      {
        name: "Navatara",
        link: "/events/Navatara/",
      },
      {
        name: "Farewell",
        link: "/events/Farewell",
      },
    ],
  },
];
