import React from "react"
import { Link } from "gatsby"
import { Paper, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
const StudentCard = ({ student }) => {
  const classes = useStyles()
  return (
    <div>
      <Link to={"/" + student.link}>
        <Paper className={classes.studentCard}>
          <Typography variant="h6" align="center">
            {student.title}
          </Typography>
          <div className={classes.studentDetail}>
            <Typography variant="body1" gutterBottom>
              Total Student Count: {student.total ? student.total : "NA"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total EIE Students:{student.eie ? student.eie : "NA"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total IT Students: {student.it ? student.it : "NA"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Class Regulator(CR) : {student.cr ? student.cr : "NA"}
            </Typography>
          </div>
        </Paper>
      </Link>
    </div>
  )
}

export default StudentCard

const useStyles = makeStyles({
  studentCard: {
    padding: "1rem",
  },
  studentDetail: {
    textAlign: "center",
    paddingTop: ".5rem",
  },
})
