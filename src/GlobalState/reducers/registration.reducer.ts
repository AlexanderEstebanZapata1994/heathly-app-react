import { userConstants } from '../constants';
import { MessageAction } from '../../Model';

export function registration(state = {}, action : MessageAction) { //chambonada
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}