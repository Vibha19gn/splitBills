import { combineReducers } from "redux";
import {
  loginReducers,
  config as loginConfig
} from "./components/login";
import {
  FriendsReducers,
  config as addFriendConfig
} from "./components/friends";
import {
  ExpensesReducers,
  config as ExpensesConfig
} from "./components/expenses";

export default combineReducers({
  [loginConfig.STATE_KEY]: loginReducers,
  [addFriendConfig.STATE_KEY]: FriendsReducers,
  [ExpensesConfig.STATE_KEY]: ExpensesReducers
});
