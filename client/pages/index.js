import { Paper, Grid, Card, Button, Typography } from "@mui/material";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import Link from "next/link";
import CustomCarousel from "../components/CustomCarousel";
import MovingLinks from "../components/MovingLinks";
import { display } from "@mui/system";
import StudentCard from "../components/StudentCard";
export default function Home() {
  const handleMailClick = () => {};
  return (
    <div>
      <Layout title="Home">
        <Grid container className={classes.main}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              fontWeight={700}
              p={4}
              sx={{ color: "white" }}
            >
              Welcome To Department Of Engineering And Technological Studies
            </Typography>
          </Grid>
          <Grid xs={12} md={5} className={classes.CustomCarousel}>
            <CustomCarousel items={data} />
          </Grid>
          <Grid item xs={12} md={5} className={classes.topText}>
            Let's now say we don't like the default graphite background of the
            buttons, nor do we like the fact that it is round. We also want to
            place them under the main Carousel, and finally remove the arrows
            and have "next" and "prev" accordingly to each button. A very
            important note here, is that any styles specified by the user DO NOT
            OVERRIDE THE EXISTING STYLES. They work in tandem with them. That
            means, that if you want to change, or get rid of a CSS attribute you
            will have to override it or unset it. The Default styles are given
            at the end of this section, and are part of the code.
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              margin: "1rem",
            }}
          >
            <div style={{ maxWidth: "80%" }}>
              <MovingLinks links={links} />
            </div>
          </Grid>
          <Grid item xs={12} className={classes.subHeading}>
            <Typography color="white" textAlign="center" variant="h4">
              Our Alumni
            </Typography>
            <div className={classes.bottomBar}></div>
          </Grid>
          <Grid item xs={12} className={classes.studentCard}>
            {students.map((student, index) => {
              return <StudentCard key={index} student={student} />;
            })}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Button variant="outlined" color="info">
              View Alumni
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.subHeading}>
            <Typography color="white" textAlign="center" variant="h4">
              Events & News
            </Typography>
            <div className={classes.bottomBar}></div>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Layout>
    </div>
  );
}

const data = [
  {
    title: "Avinash",
    desc: "Welcome To Department Of Engineering And Technological Studies",
    img: "https://wallpaperaccess.com/full/51370.jpg",
  },
  {
    title: "Hritik",
    desc: "Welcome To Department Of Engineering And Technological Studies",
    img: "https://wallpaperaccess.com/full/51373.jpg",
  },
];

const links = [
  {
    title: "Sample Link for Admission Process",
    url: "www.google.com",
  },
  {
    title: "Sample Link for Library Process",
    url: "www.lol.com",
  },
  {
    title: "Sample Link for Admission Process",
    url: "www.google.com",
  },
  {
    title: "Sample Link for Admission Process",
    url: "www.google.com",
  },
];

const students = [
  {
    name: "Shubham Singh",
    slug: "shubham-singh",
    yearIn: 2017,
    yearOut: 2021,
    about: "Keep calm and study without worries",
    job: [
      {
        title: "SDE",
        companyName: "Amazon",
        joining: "18/07/2022",
      },
    ],
  },

  {
    name: "Shubham Singh",
    slug: "shubham-singh",
    yearIn: 2017,
    yearOut: 2021,
    about: "Keep calm and study without worries",
    job: [
      {
        title: "SDE",
        companyName: "Amazon",
        joining: "18/07/2022",
      },
    ],
  },

  {
    name: "Shubham Singh",
    slug: "shubham-singh",
    yearIn: 2017,
    yearOut: 2021,
    about: "Keep calm and study without worries",
    job: [
      {
        title: "SDE",
        companyName: "Amazon",
        joining: "18/07/2022",
      },
    ],
  },
];
