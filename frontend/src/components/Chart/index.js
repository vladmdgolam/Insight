import React from "react"
import { Chart } from "react-charts"

function ChartComponent(props) {
  const { data } = props
  const series = {
    type: "bar"
  }
  const axes = [
    { primary: true, type: "ordinal", position: "bottom" },
    { position: "left", type: "linear", stacked: false }
  ]

  return (
    <div className="section__chart">
      <Chart data={data} series={series} axes={axes}></Chart>
    </div>
  )
}

export default ChartComponent
