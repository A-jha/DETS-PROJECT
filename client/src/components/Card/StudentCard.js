import React from "react"
import { Link } from "gatsby"
import { Paper, Typography } from "@mui/material"
const StudentCard = ({ student }) => {
  return (
    <div>
      <Link to={"/" + student.link}>
        <Paper>
          <Typography variant="h6" align="center">
            {student.title}
          </Typography>
          <Typography>Total Student Count: {student.total}</Typography>
          <Typography>Total EIE Students:{student.eie}</Typography>
          <Typography>Total IT Students: {student.it}</Typography>
          <Typography>Class Regulator(CR) : {student.cr}</Typography>
        </Paper>
      </Link>
    </div>
  )
}

export default StudentCard
