import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import classes from "../styles/Sitemap.module.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
const sitemap = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.header}>
            <Divider />
            <Typography variant="h4">Site Map</Typography>
            <Divider />
          </div>
          <ul className={classes.ul}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
          </ul>
          <ul className={classes.ul}>
            <li>
              <Link href={"/"}>Home</Link> /{" "}
              <Link href={"/notice"}>Notice</Link>
            </li>
          </ul>
          <ul className={classes.ul}>
            <li>
              <Link href={"/"}>Home</Link> /{" "}
              <Link href={"/events"}>Events</Link> /{" "}
              <Link href={"/events/prayukti"}>Prayukti</Link>
            </li>
          </ul>
          <ul className={classes.ul}>
            <li>
              <Link href={"/"}>Home</Link> /{" "}
              <Link href={"/events"}>Events</Link> /{" "}
              <Link href={"/events/navtara"}>Navtara</Link>
            </li>
          </ul>
          <ul className={classes.ul}>
            <li>
              <Link href={"/"}>Home</Link> /{" "}
              <Link href={"/events"}>Events</Link> /{" "}
              <Link href={"/events/techers-day"}>Teacher's Day</Link>
            </li>
          </ul>
          <ul className={classes.ul}>
            <li>
              <Link href={"/"}>Home</Link> /{" "}
              <Link href={"/alumni"}>Alumni</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default sitemap;
