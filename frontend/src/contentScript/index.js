/* global chrome */
import React from "react"
import ReactDOM from "react-dom"
import Bar from "./Bar"
// полный доступ к дому
// выполняется в контексте страницы, поэтому
// можете смело инспектировать страницу и смотреть консоль с выводом ошибок в нее.

// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages

// printAllPageLinks();

chrome.extension.sendMessage({}, function (response) {
  // void chrome.runtime.lastError
  if (chrome.runtime.lastError) {
    console.log("fuck it! I've checked the goddamn thing")
  }
  initializeReactThings()
})

function initializeReactThings() {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval)

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js")
      // ----------------------------------------------------------

      // just place a div at top right
      var div = document.createElement("div")
      div.id = "insight-extension-div"
      document.body.insertAdjacentElement("afterbegin", div)
      ReactDOM.render(<Bar />, document.getElementById("insight-extension-div"))

      // document
      //   .querySelector("#insight-extension-div")
      //   .addEventListener("click", function () {
      //     console.log("on click event")
      //   })

      // document.querySelector("#insight-extension-div").addEventListener(
      //   "click",
      //   function () {
      //     console.log("on click event")
      //     // alert("proof of click event")
      //     // chrome.runtime.sendMessage("showPageAction")
      //     // var data = {
      //     //   any: "JSON-ifiable data",
      //     //   meaning: "no DOM elements or classes/functions"
      //     // }

      //     // // alert("dispatching event")
      //     // document.dispatchEvent(
      //     //   new CustomEvent("yourCustomEvent", { detail: data })
      //     // )
      //   },
      //   false
      // )
    }
  }, 10)
}
