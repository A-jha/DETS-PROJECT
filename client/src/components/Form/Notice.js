import React, { useState } from "react"
import { Typography, Grid, Button, TextField, Stack } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Link } from "gatsby"
const Notice = ({ data, url }) => {
  const [notice, setNotice] = useState({
    title: data.title || "",
    description: data.description || "",
    link: data.link || "",
  })
  const [error, setError] = useState({
    titleError: "",
    descriptionError: "",
    linkError: "",
  })
  const [errorState, setErrorState] = useState({
    titleErrorState: false,
    descriptionErrorState: false,
    linkErrorState: false,
  })

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(notice)
    //console.log(url)
    try {
      const result = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(notice),
        headers: { "Content-Type": "application/json" },
      })
    } catch (error) {
      console.log(error.message)
    }
  }
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
              error={errorState.titleErrorState}
              helperText={error.titleError}
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
              error={errorState.descriptionErrorState}
              helperText={error.descriptionError}
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
              error={errorState.linkErrorState}
              helperText={error.linkError}
            ></TextField>
          </div>
          <div className={classes.btnContainer}>
            <Link to="/notice">
              <Button variant="outlined" className={classes.btn}>
                Cancel
              </Button>
            </Link>
            <Button
              variant="outlined"
              className={classes.btn}
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Submit
            </Button>
          </div>
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
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem !important",
  },
  btn: {
    margin: "0rem  .3rem",
  },
})
