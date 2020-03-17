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
    <div className="section section__overall-stats">
      <h3 className="text-center">За неделю</h3>
      <div className="section__site-chart mb-5">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">Время на сайте</h5>
          <div className="">Сегодня</div>
        </div>
        <Chart data={data} />
      </div>
      <h3>Статистика за всё время</h3>

      <div className="section__facts">
        <div className="section__fact">
          <h3 className="mb-0">8д 16ч</h3>
          <p className="mb-0">всё время в браузере</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0 text-nowrap">114</h3>
          <p className="mb-0">активных дней</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0">1ч 49м</h3>
          <p className="mb-0">среднее время за день</p>
        </div>
      </div>
    </div>
  )
}

export default SectionOpenedSite
