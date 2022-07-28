import { Grid, Typography, Card, Button, Link } from "@mui/material";
import Image from "next/image";
import React from "react";
import Layout from "../../components/layout/Layout";
import classes from "../../styles/Events.module.css";
import NextLink from "next/link";
const Events = () => {
  return (
    <Layout>
      <Grid container>
        <Grid xs={12} md={6} className={classes.topImgCont}>
          <img
            className={classes.topImg}
            src="https://raw.githubusercontent.com/A-jha/DETS-PROJECT/master/client/public/events.png"
          />
        </Grid>
        <Grid xs={12} md={6} className={classes.topTextCont}>
          <Typography
            textAlign={"center"}
            color="white"
            className={classes.topText}
            fontSize={20}
          >
            College Life is one of the most remarkable and lovable times of an
            individual's life. Unlike School Life, College Life has a different
            experience, and a person needs to have this experience in his/her
            life. College Life exposes us to whole new experiences which we
            always dream of experiencing after our school life. Lucky are those
            who get the chance to enjoy their college life, as many people don't
            get this chance due to their circumstances or financial issues. For
            every person, College Life has a different meaning. While some
            people spend their college life partying with friends, others become
            more cautious about their careers and study hard. Whatever the way,
            every individual enjoys their college life and always wishes to
            relive that time once it is over.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center" color="white">
            All Events
          </Typography>
          <div className={classes.bottomBar}></div>
        </Grid>
        <Grid item xs={12} className={classes.eventCardCont}>
          <Card className={classes.eventCard}>
            <Image
              src="https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/alumni3.JPG"
              width={400}
              height={300}
            />
            <Typography px={2} variant="h5">
              Navatara
            </Typography>
            <Typography px={2}>
              It’s sad to see you leave but it’s good to see you’re all prepared
              for the next phase of your life. A happy farewell to you. Never
              stop learning and never stop winning!
            </Typography>
            <NextLink href={"events/Navatara"} passHref>
              <Link>View More</Link>
            </NextLink>
          </Card>
          <Card className={classes.eventCard}>
            <Image
              src="https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/alumni3.JPG"
              width={400}
              height={300}
            />
            <Typography px={2} variant="h5">
              FAREWELL
            </Typography>
            <Typography px={2}>
              It’s sad to see you leave but it’s good to see you’re all prepared
              for the next phase of your life. A happy farewell to you. Never
              stop learning and never stop winning!
            </Typography>
            <NextLink href={"events/Farewell"} passHref>
              <Link>View More</Link>
            </NextLink>
          </Card>
          <Card className={classes.eventCard}>
            <Image
              src="https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/alumni3.JPG"
              width={400}
              height={300}
            />
            <Typography px={2} variant="h5">
              Prayukti
            </Typography>
            <Typography px={2}>
              We all have experienced kindness at some point of time in our
              lives - It could be towards ourselves, others or the environment.
              It touches hearts and is an ennobling act.
            </Typography>
            <NextLink href={"events/Prayukti"} passHref>
              <Link>View More</Link>
            </NextLink>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Events;
