import { messagesConstants } from '../constants';
import { messageAlert } from '../../Model/MessageAlert.Model'

const initialState : messageAlert = {
  type :"",
  payload : ""
}
export function MessageAlert(state : messageAlert = initialState, action : messageAlert) {
  switch (action.type) {
    case messagesConstants.SUCCESS:
      return {
        type: 'success',
        message : action.payload
      };
    case messagesConstants.ERROR:
      return {
        type: 'error',
        message : action.payload
      };
    case messagesConstants.CLEAR:
      return {
        ...state,
        type : "",
        payload : ""
      };
    default:
      return state
  }
}