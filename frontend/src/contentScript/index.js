/* global chrome */
import React from "react"
import ReactDOM from "react-dom"
import Bar from "./Bar"

// chrome.extension.sendMessage({}, function (response) {
//   // void chrome.runtime.lastError
//   if (chrome.runtime.lastError) {
//     console.log("fuck it! I've checked the goddamn thing")
//   }
  // initializeReactThings()
// })

const div = document.createElement("div")
div.id = "insight-extension-div"
document.body.insertAdjacentElement("afterbegin", div)
ReactDOM.render(<Bar />, document.getElementById("insight-extension-div"))

function initializeReactThings() {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval)

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js")
      // ----------------------------------------------------------

      // just place a div at top right
      const div = document.createElement("div")
      div.id = "insight-extension-div"
      document.body.insertAdjacentElement("afterbegin", div)
      ReactDOM.render(<Bar />, document.getElementById("insight-extension-div"))
    }
  }, 50)
}
