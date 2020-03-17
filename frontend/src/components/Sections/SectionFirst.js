/* global chrome */
import React, { useState, useEffect } from "react"
import dots from "../../icons/dots.svg"
import Chart from "../Chart"
import OverallStatsCurrent from "../OverallStatsCurrent"

function SectionOpenedSite(props) {
  const [website, setWebsite] = useState(null)
  const { currentWebsite, tabs } = props

  useEffect(() => {
    if (currentWebsite) {
      let website = currentWebsite.replace(/www\./, "")
      website = website.charAt(0).toUpperCase() + website.slice(1)
      setWebsite(website)
    }
  })

  const data = [
    {
      label: "Время на сайте",
      datums: [
        { x: "Пн", y: 39 },
        { x: "Вт", y: 49 },
        { x: "Ср", y: 19 },
        { x: "Чт", y: 50 },
        { x: "Пт", y: 0 },
        { x: "Сб", y: 0 },
        { x: "Вс", y: 0 }
      ]
    }
  ]

  return (
    <div className="section section__this-site">
      <div className="section__pin">
        <h3>{website}</h3>
      </div>
      <div className="section__site-chart mb-5">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">Время на сайте</h5>
          <div className="">Сегодня</div>
        </div>
        <Chart data={data} />
      </div>
      <OverallStatsCurrent currentWebsite={currentWebsite} tabs={tabs} />
    </div>
  )
}

export default SectionOpenedSite
