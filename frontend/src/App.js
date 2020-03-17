/* global chrome */

import React from "react"
import "./index.scss"
import Header from "./containers/Header"
import Sections from "./components/Sections"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabs: null }
    this.setTabsData = this.setTabsData.bind(this)
    this.openOptionsPage = this.openOptionsPage.bind(this)
    this.setCurrentWebsite = this.setCurrentWebsite.bind(this)
    this.openSection = this.openSection.bind(this)
    this.state = {
      activeSection: 0
    }
  }

  componentDidMount() {
    this.setTabsData()
    this.setCurrentWebsite()
  }

  openOptionsPage() {
    chrome.runtime.openOptionsPage()
  }

  openSection(index) {
    this.setState({ activeSection: index })
  }

  setCurrentWebsite() {
    chrome.windows.getLastFocused({ populate: true }, currentWindow => {
      let url
      const activeTab = currentWindow.tabs.find(t => t.active === true)
      url = activeTab.url.replace(/^(?:https?:\/\/)?/i, "").split("/")[0]
      console.log(url)
      this.setState({ currentWebsite: url })
    })
  }

  setTabsData() {
    if (!this.state.tabs) {
      let tabs
      chrome.storage.local.get("tabs", item => {
        tabs = item.tabs
        window.tabs = tabs
        this.setState({ tabs: tabs })
      })
    }
  }

  render() {
    const { tabs, currentWebsite, activeSection } = this.state

    return (
      <>
        <Header
          tabs={tabs}
          activeSection={activeSection}
          currentWebsite={currentWebsite}
          openOptionsPage={this.openOptionsPage}
          handleOpenSection={this.openSection}
        />
        <Sections
          activeSection={activeSection}
          currentWebsite={currentWebsite}
          tabs={tabs}
        />
      </>
    )
  }
}

export default App
