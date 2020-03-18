/* global chrome */
import React, { useState, useEffect } from "react"
import dots from "../../icons/dots.svg"
import gradientchart from "../../images/gradient-graph.png"
import Chart from "../Chart/ChartOverall"
import OverallStatsCurrent from "../OverallStatsCurrent"

function SectionOverall(props) {
  const { currentWebsite, tabs } = props

  const data = [
    {
      label: "Время в браузере, мин",
      datums: [
        { x: "Пн", y: 231 },
        { x: "Вт", y: 174 },
        { x: "Ср", y: 27 },
        { x: "Чт", y: 0 },
        { x: "Пт", y: 0 },
        { x: "Сб", y: 0 },
        { x: "Вс", y: 0 }
      ]
    }
  ]

  return (
    <div className="section section__overall-stats">
      <div className="section__gradient-graph">
        <img src={gradientchart} className="img-fluid" alt="" />
        <div className="d-flex justify-content-between section__gradient-graph_pills">
          <div className="pill pill_media">Медиа</div>
          <div className="pill pill_productivity">Продуктивность</div>
          <div className="pill pill_social">Социальные сети</div>
          <div className="pill pill_entertainment">Развлечения</div>
        </div>
      </div>

      <div className="section__site-chart mb-5">
        <h3 className="text-center">Общее время по дням</h3>
        <Chart data={data} />
      </div>

      <h3 className="text-center">Статистика за всё время</h3>

      <div className="section__facts">
        <div className="section__fact">
          <h3 className="mb-0">8д 16ч</h3>
          <p className="">всё время в браузере</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0 text-nowrap">114</h3>
          <p className="">активных дней</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0">1ч 49м</h3>
          <p className="">среднее время за день</p>
        </div>
      </div>
    </div>
  )
}

export default SectionOverall
