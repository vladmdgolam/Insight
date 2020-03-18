import React from "react"
import { Chart } from "react-charts"

function ChartComponent(props) {
  const { data } = props
  const series = {
    type: "bar"
  }
  const axes = React.useMemo(() => [
    { primary: true, type: "ordinal", position: "bottom" },
    { position: "left", type: "linear", stacked: false, show: false }
  ])

  const getSeriesStyle = () => ({
    color: `#323232`,
    rx: "6px",
    ry: "6px"
  })

  return (
    <div className="section__chart">
      <Chart
        data={data}
        series={series}
        getSeriesStyle={getSeriesStyle}
        axes={axes}
        tooltip
      ></Chart>
    </div>
  )
}

export default ChartComponent
