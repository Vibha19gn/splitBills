import { OPEN_SPINNER, CLOSE_SPINNER } from "./action-types";

const spinnerReducer = (state = { status: false }, action) => {
  switch (action.type) {
  case OPEN_SPINNER:
    return Object.assign({}, state, { status: true });
  case CLOSE_SPINNER:
    return Object.assign({}, state, { status: false });
  default:
    return state;
  }
};

export default spinnerReducer;
