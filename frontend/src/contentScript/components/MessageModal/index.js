import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import { getArrayTime } from "./../../../Helpers"

const customStyles = {
  overlay: {
    position: "static",
  },
  content: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    border: "1px solid rgb(204, 204, 204)",
    background: "rgb(255, 255, 255)",
    outline: "none",
    "z-index": "1000000",
    padding: "20px",
  },
}

export default function MessageModal(props) {
  const { modalOpen, totalTime, tab, limit, sendMessage } = props
  const [totalTimeArr, setTotalTimeArr] = useState(getArrayTime(totalTime))
  const [limitArr, setLimitArr] = useState(getArrayTime(limit))
  const [siteOgName, setSiteOgName] = useState(null)
  Modal.setAppElement("#insight-extension-div")
  //   var subtitle
  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00"
  //   }

  //   function closeModal() {
  //     setIsOpen(false)
  //   }

  //   console.log({tab})
  const siteNameOg = document.querySelector("meta[property='og:site_name']").content
  setSiteOgName(siteNameOg ? siteNameOg : false)
  // useEffect(() => {
  // }, [])

  useEffect(() => {
    setTotalTimeArr(getArrayTime(totalTime))
  }, [totalTime])
  useEffect(() => {
    setLimitArr(getArrayTime(limit))
  }, [limit])

  const wait = (time) => {
    // console.log("wait")
    sendMessage("addMoreTime", { time: time * 60 })
  }

  const siteInfo =
    tab != null ? (
      <>
        <div className="d-flex insight-message-modal_site-info">
          <img src={tab.favicon} alt={siteOgName ? siteOgName : tab.url} />
          <h1>{siteOgName ? siteOgName : tab.url}</h1>
        </div>
      </>
    ) : (
      <></>
    )

  return (
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      contentLabel="Example Modal"
      className={"insight-message-modal"}
    >
      {tab != null && siteInfo}
      <h2>
        Ты находишься на этом сайте {totalTimeArr.hours}ч {totalTimeArr.mins}м:
        твоя цель на сегодня достигнута
      </h2>
      {/* <h2>
        Ты&nbsp;находишься на&nbsp;этом сайте 30&nbsp;минут: твоя цель на&nbsp;сегодня достигнута
      </h2> */}
      {/* <h2>
        Ты находишься на этом сайте {totalTimeArr.hours}ч {totalTimeArr.mins}м:
        твоя цель в {limitArr.hours}ч {limitArr.mins}м на сегодня достигнута
      </h2> */}
      <div className="insight-message-modal_options">
        <div className="insight-message-modal_button-wrapper">
          <div
            className="insight-message-modal_button"
            onClick={() => wait(15)}
          >
            подожди
          </div>
          <p className="small">+15 мин</p>
        </div>
        <div className="insight-message-modal_button-wrapper">
          <div
            className="insight-message-modal_button"
            onClick={() => sendMessage("closeAll")}
          >
            хорошо
          </div>
          <p className="small">(закрыть все<br/>вкладки сайта)</p>
        </div>
        <div className="insight-message-modal_button-wrapper">
          <div
            className="insight-message-modal_button"
            onClick={() => wait(60)}
          >
            мне нужно время
          </div>
          <p className="small">+ час</p>
        </div>
      </div>
    </Modal>
  )
}
