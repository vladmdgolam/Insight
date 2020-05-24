/* global chrome */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import useInterval from "./hooks/UseInterval"
import "./index.scss"
import MessageModal from "./components/MessageModal"
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
  const [tab, setTab] = useState(null)

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
        // console.log("set first time", limitThing)
        setLimit(limitThing)
      }
    })
    chrome.runtime.connect().onDisconnect.addListener(changeDisconnect(true))
    chrome.runtime.onConnect.addListener(changeDisconnect(false))

    return () => {
      chrome.runtime
        .connect()
        .onDisconnect.removeListener(changeDisconnect(true))
      chrome.runtime.onConnect.removeListener(changeDisconnect(false))
    }
  }, [])

  function requestTab() {
    chrome.runtime.sendMessage({ askFor: "tab" }, function (response) {
      if (!chrome.runtime.lastError) {
        const { tab: newTab } = response
        setTab(newTab)
      }
    })
  }

  function changeDisconnect(value) {
    if (chrome.runtime.lastError) {
    }
    setDisconnected(value)
    // console.log(value ? "disconnected" : "connected")
  }

  useEffect(() => {
    if (limitReached) {
      requestTab()
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

  const sendMessageToChrome = (askFor, message) => {
    // console.log("message is", { askFor: askFor, ...message })
    chrome.runtime.sendMessage({askFor: askFor, ...message}, (response) => {
      void chrome.runtime.lastError
      return response
    })
  }

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
            console.log("limit is reached")
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
    setLimitReached(true)
    // console.log({ disconnected })
    console.log(timeSpent, limit, progress)
  }

  const classes = classNames({
    "insight-bar": true,
    "insight-bar_exceeded": limitReached,
  })

  return (
    <>
      <StyledDiv progress={progress} className={classes}>
        <MessageModal
          sendMessage={sendMessageToChrome}
          limit={limit}
          tab={tab}
          modalOpen={limitReached}
          totalTime={timeSpent}
        />
      </StyledDiv>
    </>
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
