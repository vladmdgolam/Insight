import React, { useMemo } from "react"
import { Chart } from "react-charts"
import useChartConfig from "../../utils/randomizeChart"

function ChartArea(props) {
  //   const { data } = props

  const data = [
    {
      label: "1",
      datums: [
        { x: "5ч 45 мин в день", y: 5.75 },
        { x: "2ч 26 мин в день", y: 2.5 }
      ]
    }
  ]

  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "right" },
      { position: "bottom", type: "linear", stacked: true, show: false }
    ],
    []
  )

  let colors = ["#EF5B5F", "#C4C4C4"]

  const getSeriesStyle = columns => ({
    color: colors[columns.index],
    rx: "6px",
    ry: "6px"
  })

  return (
    <div className="section__chart_comparison">
      <Chart
        data={data}
        series={series}
        getSeriesStyle={getSeriesStyle}
        getDatumStyle={getSeriesStyle}
        axes={axes}
        tooltip
      />
    </div>
  )
}

export default ChartArea
