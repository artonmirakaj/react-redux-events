import React from 'react'
import { connect } from 'react-redux'
import TestModal from './TestModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

// find out which modal type is open
const moadlLookup = {
  TestModal,
  LoginModal,
  RegisterModal
}

// if a modal has been opened
// we call modal reducer, it populates our modal type in our store
const mapState = (state) => ({
  currentModal: state.modals
})

const ModalManager = ({ currentModal }) => {
  let renderedModal; // what is added 

  if (currentModal) { // we have a modal in our props
    const { modalType, modalProps } = currentModal;
    const ModalComponent = moadlLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />
  }
  return <span>{renderedModal}</span>
}

export default connect(mapState)(ModalManager)
