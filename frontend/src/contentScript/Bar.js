/* global chrome */
import React, { useState } from "react"
import "./index.scss"

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   )
//   if (request.greeting == "hello") sendResponse({ farewell: "goodbye" })
// })

function Bar() {
  const [limit, setLimit] = useState(1800)
  const [firstTime, setFirstTime] = useState(true)

  function sendMessage() {
    chrome.runtime.sendMessage({ askFor: "limit" }, function (response) {
      console.log(
        "Limit for current website is",
        response.limit,
        "first time visit:",
        response.firstTime
      )
    })
  }
  return (
    <div onClick={sendMessage} className="insight-bar">
      {/* {text} */}
    </div>
  )
}

export default Bar
