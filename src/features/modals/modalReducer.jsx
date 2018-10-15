import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants'
import { createReducer } from '../../app/common/util/reducerUtil'

// no open modals when application initializes
const initialState = null;

// when we open the modal we pass the type and properties in payload
// set state of our modals from null to type and props
export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps }
}


export const closeModal = (state, payload) => {
  return null
}

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
})
