import { combineReducers } from "redux";
import {
  loginReducers,
  config as loginConfig
} from "./components/login";

export default combineReducers({
  [loginConfig.STATE_KEY]: loginReducers
});
