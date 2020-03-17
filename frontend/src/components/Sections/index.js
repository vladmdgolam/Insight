/* global chrome */
import React, { useEffect } from "react"
import SectionFirst from "./SectionFirst"
import SectionSecond from "./SectionSecond"
import SectionThird from "./SectionThird"
import Flickity from "react-flickity-component"

// function Sections(props) {
class Sections extends React.Component {
  constructor(props) {
    super(props)
    this.flkty = React.createRef()
    this.slideNavigate = this.slideNavigate.bind(this)
  }

  slideNavigate(index) {
    this.flkty.select(index)
  }

  componentDidUpdate() {
    const { activeSection } = this.props
    if (this.flkty.selectedIndex != activeSection) {
      this.slideNavigate(activeSection)
    }
  }

  render() {
    // const { activeSection } = this.props
    const flickityOptions = {
      prevNextButtons: false,
      pageDots: false
    }

    // let flkty = React.createRef()

    // useEffect(() => {
    //   console.log(flkty)
    //   window.flkty = flkty
    //   // flkty.select(activeSection)
    //   // if (flkty != undefined) {
    //   // }
    //   // effect
    //   // return () => {
    //   //   cleanup
    //   // }
    // }, [activeSection])

    // function slideNavigate() {
    //   flkty.select(2)
    // }

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
        <SectionFirst {...this.props} />
        <SectionSecond {...this.props} />
        <SectionThird {...this.props} />
      </Flickity>
    )
  }
}

export default Sections
