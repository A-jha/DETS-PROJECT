import React, { useState } from "react";
import classes from "../styles/Dialog.module.css";
import {
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
const CustomDialog = ({
  notice,
  open,
  isOpen,
  handleOpen,
  handleClose,
  key,
}) => {
  //   const [open, setOpen] = useState(false);
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <Dialog
      key={key}
      //   fullScreen
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Typography textAlign="center">
        Department Of Engineering And Technological Studies(K.U.)
      </Typography>
      <Typography variant="h4" textAlign="center">
        Notice
      </Typography>
      <div className={classes.bottomBar}></div>
      <Typography textAlign="center">{notice.postedOn}</Typography>
      <DialogTitle id="alert-dialog-title" textAlign="center">
        {notice.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {notice.body}
        </DialogContentText>
        <Typography textAlign="center">{notice.postedBy}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
