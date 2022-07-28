import { Paper, Grid, Card, Button, Typography, Link } from "@mui/material";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import NextLink from "next/link";
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
              <NextLink href="/alumni/" passHref>
                <Link>View Alumni</Link>
              </NextLink>
            </Button>
          </Grid>
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
    isAdmin: false,
    name: "Avinash Jha",
    email: "sam@gmail.com",
    about: "Hi I am Avinash Jha",
    stream: "IT",
    slug: "hritik-raj",
    yearIn: "2018",
    yearOut: "2022",
    social: [
      {
        name: "Github",
        link: "https://github.com/A-Jha",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/avvinashjha/",
      },
    ],
    company: [
      {
        companyName: "Wipro",
        title: "Project Engineer",
        joining: "1/08/2022",
      },
    ],
    gender: "male",
  },
  {
    isAdmin: false,
    name: "Hritik Raj",
    email: "sam@gmail.com",
    about: "Hi I am Hritik Raj",
    stream: "IT",
    slug: "hritik-raj",
    yearIn: "2018",
    yearOut: "2022",
    social: [
      {
        name: "Github",
        link: "https://github.com/A-Jha",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/avvinashjha/",
      },
    ],
    company: [
      {
        companyName: "Wipro",
        title: "Project Engineer",
        joining: "1/08/2022",
      },
    ],
    gender: "male",
  },
  {
    isAdmin: false,
    name: "Raja Biswas",
    email: "sam@gmail.com",
    about: "Hi I am Raja Biswas",
    stream: "IT",
    slug: "hritik-raj",
    yearIn: "2018",
    yearOut: "2022",
    social: [
      {
        name: "Github",
        link: "https://github.com/A-Jha",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/avvinashjha/",
      },
    ],
    company: [
      {
        companyName: "Wipro",
        title: "Project Engineer",
        joining: "1/08/2022",
      },
    ],
    gender: "male",
  },
  {
    isAdmin: false,
    name: "Avinash Sharma",
    email: "sam@gmail.com",
    about: "Hi I am Avinash Sharma",
    stream: "IT",
    slug: "Avinash Sharma",
    yearIn: "2018",
    yearOut: "2022",
    social: [
      {
        name: "Github",
        link: "https://github.com/A-Jha",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/avvinashjha/",
      },
    ],
    company: [
      {
        companyName: "Wipro",
        title: "Project Engineer",
        joining: "1/08/2022",
      },
    ],
    gender: "male",
  },
  {
    isAdmin: false,
    name: "Debashish Roy",
    email: "sam@gmail.com",
    about: "Hi I am Hritik Raj",
    stream: "IT",
    slug: "hritik-raj",
    yearIn: "2018",
    yearOut: "2022",
    social: [
      {
        name: "Github",
        link: "https://github.com/A-Jha",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/avvinashjha/",
      },
    ],
    company: [
      {
        companyName: "Wipro",
        title: "Project Engineer",
        joining: "1/08/2022",
      },
    ],
    gender: "male",
  },
  {
    isAdmin: false,
    name: "Ravi Raj",
    email: "sam@gmail.com",
    about: "Hi I am Hritik Raj",
    stream: "IT",
    slug: "hritik-raj",
    yearIn: "2018",
    yearOut: "2022",
    social: [
      {
        name: "Github",
        link: "https://github.com/A-Jha",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/avvinashjha/",
      },
    ],
    company: [
      {
        companyName: "Wipro",
        title: "Project Engineer",
        joining: "1/08/2022",
      },
    ],
    gender: "male",
  },
];
