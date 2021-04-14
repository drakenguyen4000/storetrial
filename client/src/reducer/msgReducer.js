import { MESSAGE, CLEAR } from "../action/types";

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
    case CLEAR: {
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
