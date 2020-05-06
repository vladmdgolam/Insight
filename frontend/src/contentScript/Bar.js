/* global chrome */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import useInterval from "./hooks/UseInterval"
import "./index.scss"
// import "react-devtools"
var classNames = require("classnames")

const StyledDiv = styled.div`
  background: linear-gradient(
    to right,
    #ffb800 ${(props) => props.progress - 1}%,
    #53b872 ${(props) => props.progress + 1}%
  );
`

function Bar() {
  const [limit, setLimit] = useState(1800)
  const [firstTime, setFirstTime] = useState(true)
  const [limitReached, setLimitReached] = useState(false)
  const [timeSpent, setTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [disconnected, setDisconnected] = useState(false)

  useEffect(() => {
    chrome.runtime.sendMessage({ askFor: "limit" }, function (response) {
      if (!chrome.runtime.lastError) {
        const { firstTime, limit: limitThing } = response
        console.log(
          "Limit for current website is",
          limitThing,
          "first time visit:",
          firstTime
        )
        setFirstTime(firstTime)
        console.log("set first time", limitThing)
        setLimit(limitThing)
      }
    })
    chrome.runtime.connect().onDisconnect.addListener(function () {
      if (!chrome.runtime.lastError) {
        setDisconnected(true)
      }
    })
  }, [])

  useEffect(() => {
    if (limitReached) {
      if (firstTime) {
        console.log("show one modal")
      } else {
        console.log("show limit reached")
      }
    }
  }, [limitReached, firstTime])

  const limitRef = useRef()
  useEffect(() => {
    limitRef.current = limit
  })

  const getTime = () => {
    chrome.runtime.sendMessage({ askFor: "time" }, (response) => {
      if (!chrome.runtime.lastError) {
        if (!response.notFound) {
          const { time } = response
          setTime(time)
          const ratio = (time * 100) / limitRef.current
          // console.log((time * 100) / limit, time, limit)
          setProgress(ratio)
          if (ratio >= 100) {
            setLimitReached(true)
            console.log("WOOOOW")
          }
        } else {
          // alert("Time on current website is not found")
        }
      }
    })
  }

  useInterval(() => {
    // Your custom logic here
    if (!disconnected && !limitReached) {
      getTime()
    }
  }, 1000)

  function getTimeStats() {
    console.log(timeSpent, limit, progress)
  }

  const classes = classNames({
    "insight-bar": true,
    "insight-bar_exceeded": limitReached,
  })

  return (
    <StyledDiv progress={progress} onClick={getTimeStats} className={classes}>
      {/* {text} */}
    </StyledDiv>
  )
}

export default Bar

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   )
//   if (request.greeting == "hello") sendResponse({ farewell: "goodbye" })
// })
