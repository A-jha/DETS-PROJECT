import { Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../components/layout/Layout";
const Events = () => {
  return (
    <Layout>
      <Grid container>
        <Grid xs={12}>
          <Typography>
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
        <Grid xs={12}>
          <img src="../../public/avtar.png" />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Events;
