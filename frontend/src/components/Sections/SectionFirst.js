/* global chrome */
import React, { useState, useEffect } from "react"
import dots from "../../icons/dots.svg"
import Chart from "../Chart/ChartWebsite"
import OverallStatsCurrent from "../OverallStatsCurrent"

function SectionOpenedSite(props) {
  const { websiteCleanUrl, currentWebsite, tabs, favicon } = props

  const data = React.useMemo(() => [
    {
      label: "На сайте, мин",
      datums: [
        { x: "Пн", y: 39 },
        { x: "Вт", y: 49 },
        { x: "Ср", y: 25 },
        { x: "Чт", y: 0 },
        { x: "Пт", y: 0 },
        { x: "Сб", y: 0 },
        { x: "Вс", y: 0 }
      ]
    }
  ])

  return (
    <div className="section section__this-site">
      <div className="section__pin align-items-center d-flex justify-content-center">
        <img src={favicon} alt="favicon" className="img-fluid mr-1" />
        <h3 className="mb-0">{websiteCleanUrl}</h3>
      </div>
      <div className="section__site-chart mb-5">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">Время на сайте, минуты</h5>
          <div className="">неделя</div>
        </div>
        <Chart data={data} />
      </div>
      <OverallStatsCurrent currentWebsite={currentWebsite} tabs={tabs} />
    </div>
  )
}

export default SectionOpenedSite
