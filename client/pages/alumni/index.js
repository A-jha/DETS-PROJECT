import React from "react";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import classes from "../../styles/Alumni.module.css";
const Alumni = () => {
  return (
    <Layout title="Alumni">
      <Grid container className={classes.topCont} py={2}>
        <Grid item className={classes.topCard} xs={12} md={5}>
          <Image
            src="https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/alumni3.JPG"
            alt="alumni"
            width={600}
            height={500}
            className={classes.alumni1}
            layout="intrinsic"
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.textCont}>
          <Typography variant="body1" fontSize={20} px={3}>
            Creating an alumni network is a crucial part for any institution.
            Good alumni network brings many benefits to the institution. Our
            department has a strong alumni network. Our engaged alumni network
            help the students to benefit from their skills and experience on
            clearing GATE exams and interview of top mnc,s. Getting into top
            psu,s have become a trend of the institution. Securing top rank in
            GATE helped in breaking the mental barrier of the juniors resulting
            them in doing even better. Our graduates either have joined top
            psu,s or have ended up doing masters from the top institutes of the
            country and hence getting a high end job. Worthy students also have
            a chance in getting referrals in top mnc,s .The members of the
            alumni have jobs in different spheres ,having beneficial
            connections. Personal experience of jobs and living conditions helps
            juniors to get a better idea of the real world. Availability of the
            alumni and their willingness to help their juniors whenever required
            is worth noticing.{" "}
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Alumni;
