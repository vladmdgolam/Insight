import Modal from "react-modal"
import React from "react"

const customStyles = {
  overlay: {
    position: "static"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default function MessageModal({ modalOpen }) {
  Modal.setAppElement("#insight-extension-div")
  var subtitle

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00"
  //   }

  //   function closeModal() {
  //     setIsOpen(false)
  //   }

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      {/* <button onClick={closeModal}>close</button> */}
      <div>I am a modal</div>
    </Modal>
  )
}
