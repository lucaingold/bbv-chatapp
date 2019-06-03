import Socket from "./Socket";
import { CONNECT_SOCKET, connectionChanged } from "../actions";
//TODO löschen
import { messageReceived } from "../../message/actions"; 
//TODO hier auskommentieren
// import { messageReceived, messageSent } from "../../message/actions";

const socketMiddleware = (store) => {

  const onConnectionChange = (isConnected) => {
    store.dispatch(connectionChanged(isConnected));
  };

  const onIncomingMessage = (message) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next) => (action) => {
    const messageState = store.getState().messageState;
    const socketState = store.getState().socketState;
    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messageState.user, process.env.PORT || socketState.port);
        break;

      //TODO hier auskommentieren
      // case SEND_MESSAGE_REQUEST:
      //   socket.sendMessage(action.message);
      //   store.dispatch(messageSent());
      //   break;

      default:
        break;
    }

    return next(action)
  };
};

export default socketMiddleware;