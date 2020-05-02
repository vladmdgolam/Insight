/* global chrome */
import React, { useEffect } from "react"
import SectionFirst from "./SectionFirst"
import SectionSecond from "./SectionSecond"
import SectionThird from "./SectionThird"
import Flickity from "react-flickity-component"

class Sections extends React.Component {
  constructor(props) {
    super(props)
    this.flkty = React.createRef()
    this.state = {
      websiteCleanUrl: null
    }
  }

  componentDidUpdate() {
    const { activeSection } = this.props
    if (this.flkty.selectedIndex != activeSection) {
      this.flkty.select(activeSection)
    }
    const { websiteCleanUrl } = this.state
    if (!websiteCleanUrl) {
      // console.log("setting")
      const { currentWebsite } = this.props
      const website = currentWebsite.replace(/www\./, "")
      const websiteCleanUrl =
        website
          .replace(/www\./, "")
          .charAt(0)
          .toUpperCase() + website.slice(1)
      this.setState({
        websiteCleanUrl: websiteCleanUrl
      })
    } else {
    }
  }

  render() {
    const { websiteCleanUrl } = this.state
    const flickityOptions = {
      prevNextButtons: false,
      pageDots: false
    }

    return (
      <Flickity
        flickityRef={c => (this.flkty = c)}
        className={"sections"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        // disableImagesLoaded={false} // default false
        // reloadOnUpdate // default false
        static // default false
      >
        <SectionFirst websiteCleanUrl={websiteCleanUrl} {...this.props} />
        <SectionSecond {...this.props} />
        <SectionThird {...this.props} />
      </Flickity>
    )
  }
}

export default Sections
