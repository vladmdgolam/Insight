/* global chrome */

import React, { useState, useEffect } from "react"
import logo from "../../icons/logo.svg"
import dots from "../../icons/dots.svg"
import { getTotalTimeForDay, getArrayTime } from "./../../Helpers"

function Header(props) {
  const { currentWebsite, activeSection } = props
  // const [firstName, setFirstName] = useState(null)
  const [thisSiteTotal, setThisSiteTotal] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const today = new Date().toLocaleDateString("en-US")

  let totalTimeArray = getArrayTime(totalTime)
  let totalTimeThisArray = getArrayTime(thisSiteTotal)

  useEffect(() => {
    if (props.tabs) {
      let targetTabs = props.tabs.filter(x =>
        x.days.find(s => s.date === today)
      )
      let totalTime = getTotalTimeForDay(today, targetTabs)
      setTotalTime(totalTime)

      let thisSite = targetTabs.find(x => x.url == currentWebsite).summaryTime
      setThisSiteTotal(thisSite)
    }
    // chrome.storage.local.get("user_first_name", item => {
    //   setFirstName(item.user_first_name)
    // })
  })

  let menuItems = ["этот сайт", "вся статистика", "открытия"]
  const tabMenu = (
    <nav className="header__tab-menu">
      {menuItems.map((item, index) => {
        return (
          <a
            key={index}
            className={
              "header__btn " +
              (index == activeSection ? "header__btn_active" : "")
            }
            onClick={() => props.handleOpenSection(index)}
          >
            {item}
          </a>
        )
      })}
    </nav>
  )

  return (
    <header className="header bg-secondary text-light text-center">
      <div className="header__top d-flex justify-content-between">
        <div className="d-flex">
          <img src={logo} alt="Insight logo" />
          <h1>Привет, {props.user.name}!</h1>
        </div>
        <img
          onClick={() => props.openOptionsPage()}
          src={dots}
          alt="menu-button"
        />
      </div>
      <div className="header__stats">
        <h5 className="mb-0">Сегодня</h5>
        <div className="d-flex justify-content-evenly text-center">
          <div>
            <h1 className="display-1 mb-0">
              {totalTimeThisArray.hours}:{totalTimeThisArray.mins}
            </h1>
            <p className="mb-0 font-weight-medium">на этом сайте</p>
          </div>
          <div>
            <h1 className="display-1 mb-0">
              {totalTimeArray.hours}:{totalTimeArray.mins}
            </h1>
            <p className="mb-0 font-weight-medium">всего</p>
          </div>
        </div>
      </div>
      {tabMenu}
    </header>
  )
}

export default Header
