import { combineReducers } from "redux";
import {
  loginReducers,
  config as loginConfig
} from "./components/login";
import {
  addFriendsReducers,
  config as addFriendConfig
} from "./components/addFriend";
import {
  ExpensesReducers,
  config as ExpensesConfig
} from "./components/expenses";

export default combineReducers({
  [loginConfig.STATE_KEY]: loginReducers,
  [addFriendConfig.STATE_KEY]: addFriendsReducers,
  [ExpensesConfig.STATE_KEY]: ExpensesReducers
});
