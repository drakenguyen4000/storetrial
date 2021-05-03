import { MESSAGE, CLEAR_MESSAGE } from "../action/types";

const initialState = {
  msg: null,
};

export default function msgReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        msg: action.payload,
      };
    case CLEAR_MESSAGE: {
      return {
        ...state,
        msg: null,
      };
    }
    default:
      return state;
  }
}
