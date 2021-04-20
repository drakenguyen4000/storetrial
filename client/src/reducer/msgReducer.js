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
        isLoading: false,
      };
    case CLEAR_MESSAGE: {
      return {
        ...state,
        msg: null,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
