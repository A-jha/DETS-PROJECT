import React, { useState } from "react"
import { Typography, Grid, Button, TextField, Stack } from "@mui/material"
import { makeStyles } from "@mui/styles"
const Notice = () => {
  const [notice, setNotice] = useState({
    title: "",
    description: "",
    link: "",
    createdAt: new Date().toLocaleDateString(),
  })
  const classes = useStyles()
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h4">
          Notice
        </Typography>
        <div className={classes.bar}></div>
      </Grid>
      <Grid item xs={11}>
        <Stack spacing={2}>
          <div className={classes.formInput}>
            <TextField
              fullWidth={true}
              label="Title"
              type="text"
              value={notice.title}
              variant="outlined"
              onChange={e =>
                setNotice(prevNotice => ({
                  ...prevNotice,
                  title: e.target.value,
                }))
              }
            ></TextField>
          </div>
          <div>
            <TextField
              fullWidth={true}
              label="Description"
              type="text"
              value={notice.description}
              variant="outlined"
              rows={5}
              onChange={e =>
                setNotice(prevNotice => ({
                  ...prevNotice,
                  description: e.target.value,
                }))
              }
            ></TextField>
          </div>

          <div>
            <TextField
              fullWidth={true}
              label="Link"
              type="url"
              value={notice.link}
              variant="outlined"
              onChange={e =>
                setNotice(prevNotice => ({
                  ...prevNotice,
                  link: e.target.value,
                }))
              }
            ></TextField>
          </div>
          <Button variant="outlined" className={classes.btn}>
            Submit
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Notice

const useStyles = makeStyles({
  bar: {
    width: "80px",
    height: "5px",
    backgroundColor: "#444",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "10px",
  },
  btn: {
    width: "50%",
    marginLeft: "auto !important",
    marginRight: "auto !important",
    marginBottom: "1rem !important",
  },
})
