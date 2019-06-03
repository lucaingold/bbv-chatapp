export const SEND_MESSAGE_RESPONSE = 'SEND_MESSAGE_RESPONSE';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const USER_CHANGED = 'USER_CHANGED';

export const messageReceived = (message) => {
  return {
    type: SEND_MESSAGE_RESPONSE,
    message
  };
};

//hier sendMessage actionCreator erstellen

export const messageSent = () => {
  return {
    type: MESSAGE_SENT
  };
};

export const changeUsername = (username) => {
  return {
    type: USER_CHANGED,
    username
  };
};