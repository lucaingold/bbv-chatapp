import { SEND_MESSAGE_RESPONSE, MESSAGE_SENT, USER_CHANGED } from '../actions';
import { readRecord } from '../../../utils/localStorageService';

const INITIAL_STATE = {
  username: readRecord('username') || 'incognito',
  messages: []
};

function messageReducer(state = INITIAL_STATE, {username, type, message}) {
 // action: {username, type, message: { from: string, content: string}}
  switch (type) {
    case USER_CHANGED:
      return Object.assign({},
        state, {username: username}
      );      

    //TODO hier die Action abfangen

    case MESSAGE_SENT:
    default:
      return state;
  }
}

export default messageReducer;