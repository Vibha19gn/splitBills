import {STATE_KEY} from "../config";

export default (state) => {
  console.log("Aiyyo==", state)
  return state[STATE_KEY];
};
