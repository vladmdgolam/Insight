import React, { useState, useEffect } from "react"
import { getArrayTime } from "./../../Helpers"

function OverallStatsCurrent(props) {
  const { tabs, currentWebsite } = props
  const [wholeTime, setWholeTime] = useState(0)
  const [wholeData, setWholeData] = useState(null)

  useEffect(() => {
    if (tabs) {
      const thisWebsiteWholeData = tabs.filter(
        tab => tab.url === currentWebsite
      )[0]
      // первое посещение ещё отсюда можно достать

      // setWholeData(thisWebsiteWholeData)
      if (thisWebsiteWholeData) {
        setWholeTime(thisWebsiteWholeData.summaryTime)
      }
    }
  })

  const wholeTimeArr = getArrayTime(wholeTime)

  return (
    <div className="section__whole-statistics">
      <h5 className="mb-3">Статистика по сайту</h5>

      <div className="section__facts">
        {
          <div className="section__fact">
            <h3 className="mb-0">
              {wholeTimeArr.hours}ч:
              {wholeTimeArr.mins}м
            </h3>
            <p className="mb-0">всего</p>
          </div>
        }
        <div className="section__fact">
          <h3 className="mb-0">3 место</h3>
          <p className="mb-0">из 1217 сайтов</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0 text-nowrap">25м 43сек</h3>
          <p className="mb-0">среднее время в день посещения</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0">5,17%</h3>
          <p className="mb-0">от всего времени</p>
        </div>
        <div className="section__fact">
          <p className="mb-0">открывался</p>
          <h3 className="mb-0">90 дней</h3>
          <p className="mb-0">из 135</p>
        </div>
        <div className="section__fact">
          <h3 className="mb-0">60м</h3>
          <p className="mb-0">временной лимит</p>
        </div>
      </div>
    </div>
  )
}

export default OverallStatsCurrent
