import React, { useEffect, useState, useContext } from "react";
import Student from "../../models/Student";
import db from "../../utils/db";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import {
  Paper,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { Store } from "../../utils/Store";
import classes from "../../styles/Alumni.module.css";
import StudentCard from "../../components/StudentCard";
import axios from "axios";
const Alumni = (props) => {
  const router = useRouter();
  const { students } = props;
  const [studentList, setStudentList] = useState(students);
  const [searchName, setSearchName] = useState("");
  const [searchCompany, setSearchCompany] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchName, searchCompany);
    const { data } = await axios.get("/api/alumni/search", {
      name: searchName,
      company: searchCompany,
    });
  };
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
        <Grid item xs={12} md={12} className={classes.subHeading}>
          <Typography variant="h3" color="white" textAlign={"center"}>
            Our Alumni
          </Typography>
          <div className={classes.bottomBar}></div>
        </Grid>
        <Grid item xs={12} my={3} className={classes.searchBarCont}>
          <div className={classes.searchBar}>
            <TextField
              value={searchCompany}
              onChange={(e) => setSearchCompany(e.target.value)}
              variant="filled"
              placeholder="company"
              className={classes.searchCompany}
            ></TextField>

            <TextField
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              variant="filled"
              placeholder="name"
              className={classes.searchName}
            ></TextField>
            <Button
              className={classes.searchButton}
              onClick={handleSearch}
              variant="contained"
            >
              Search
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.studentListCont}>
          <div className={classes.studentList}>
            {studentList.map((student) => {
              return (
                <StudentCard key={student._id} student={student}></StudentCard>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};
export async function getServerSideProps() {
  await db.connect();
  const students = await Student.find({}).lean();
  await db.disconnect();
  return {
    props: {
      students: JSON.parse(JSON.stringify(students)),
    },
  };
}

export default Alumni;
