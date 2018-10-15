import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants'

// the type is test modal
export const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  }
}

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  }
}
