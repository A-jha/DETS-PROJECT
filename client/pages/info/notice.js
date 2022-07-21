import React, { useState } from "react";
import Notice from "../../models/Notice";
import db from "../../utils/db";
import Layout from "../../components/layout/Layout";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import classes from "../../styles/Notice.module.css";
import CustomDialog from "../../components/CustomDialoge";
export default function NoticeComp(prams) {
  const { notices } = prams;
  const [open, setOpen] = useState(false);
  const [curr, setCurr] = useState({});
  const handleOpen = (notice) => {
    // setCurr(notice);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(notices);
  return (
    <Layout>
      <Grid>
        <Grid item container xs={12}>
          <Typography
            variant="h4"
            className={classes.heading}
            textAlign="center"
          >
            Notice Board
          </Typography>
          <div className={classes.bottomBar}></div>
        </Grid>
        <Grid item xs={12} className={classes.listContainerP}>
          <List className={classes.listContainer}>
            {notices.map((notice) => {
              return (
                <ListItem key={notice._id} className={classes.listItem}>
                  <Typography sx={{ fontWeight: "900" }} variant="h5">
                    {notice.postedOn}
                  </Typography>
                  <ListItemAvatar>{notice.postedBy}</ListItemAvatar>
                  <Typography variant="h6">{notice.title}</Typography>
                  <Button variant="outlined" onClick={handleOpen}>
                    View More
                  </Button>
                  <CustomDialog
                    key={notice._id}
                    notice={notice}
                    open={open}
                    setOpen={setOpen}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  await db.connect();
  const notices = await Notice.find().lean();
  await db.disconnect();
  return {
    props: {
      notices: JSON.parse(JSON.stringify(notices)),
    },
  };
}
