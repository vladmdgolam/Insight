/* global chrome */
import React, { useState, useEffect } from "react"
import Chart from "../Chart/ChartArea"
import ChartComparison from "../Chart/ChartComparison"
import fb from "../../images/fb.png"
import meduza from "../../images/meduza.png"

function SectionInsights(props) {
  return (
    <div className="section section__insights">
      <h3 className="text-center">Открытия</h3>

      <div className="section__area-chart-box small">
        <div className="d-flex align-items-end mb-3">
          <h5 className="mb-0">Категории за месяц</h5>
          {/* <div className="">месяц</div> */}
        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex ">
            <span className="circle circle_media"></span>
            <div>Продуктивность</div>
          </div>
          <div className="d-flex ">
            <span className="circle circle_productivity"></span>
            <div>Социальные сети</div>
          </div>
          <div className="d-flex ">
            <span className="circle circle_social"></span>
            <div>Развлечения</div>
          </div>
          <div className="d-flex ">
            <span className="circle circle_entertainment"></span>
            <div>Другое</div>
          </div>
        </div>
        <Chart />
        <div className="section__area-chart-box_bottom d-flex justify-content-between">
          <div className="mt-1">17 фев</div>
          <div className="mt-1">26 фев</div>
          <div className="mt-1">6 мар</div>
          <div className="mt-1">17 мар</div>
        </div>
      </div>

      <div className="section__insight">
        <h5 className="mb-3">
          Твоё экранное время на этой неделе на 136% больше, чем на прошлой
        </h5>
        <div className="section__chart_comparison">
          <div className="bar-container d-flex align-items-center">
            <div className="bar bar_new"></div> <div>5ч 45 мин в день</div>
          </div>
          <div className="bar-container d-flex align-items-center">
            <div className="bar"></div> <div>2ч 26 мин в день</div>
          </div>
        </div>
        {/* <ChartComparison/> */}
      </div>

      <div className="section__insight">
        <h5 className="mb-3">
          Ещё немного, и ты превысишь оптимальное время на этих сайтах
        </h5>
        <div className="section__optimal">
          <div className="bar-container d-flex align-items-start">
            <div className="section__optimal_site-name pr-3 d-flex">
              <img src={fb} alt="favicon" className="img-fluid favicon mr-2" />
              <div>Facebook.com</div>
            </div>
            <div className="optimal-bar-container">
              <div className="optimal-bar">
                <div className="inside-bar inside-bar_first"></div>
              </div>
              <div className="d-flex justify-content-between">
                <div>оптимально: 21 мин</div>
                <div>вы: 46 минут в день</div>
              </div>
            </div>
          </div>

          <div className="bar-container d-flex align-items-start">
            <div className="section__optimal_site-name pr-3 d-flex">
              <img
                src={meduza}
                alt="favicon"
                className="img-fluid favicon mr-2"
              />
              <div>Meduza.io</div>
            </div>
            <div className="optimal-bar-container">
              <div className="optimal-bar">
                <div className="inside-bar inside-bar_second"></div>
              </div>
              <div className="d-flex justify-content-between">
                <div>оптимально: 15 мин</div>
                <div>вы: 32 минуты в день</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionInsights
