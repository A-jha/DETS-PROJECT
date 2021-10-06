import React from "react"
import { Bar } from "react-chartjs-2"

const state = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["rgba(75,192,192,1)", "rgba(75,19,192,1)"],
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [23, 56],
    },
  ],
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 30,
            },
            legend: {
              display: true,
              position: "right",
              
            },
          }}
        />
      </div>
    )
  }
}
