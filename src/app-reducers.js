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
import {
  customersReducers,
  config as CustomerConfig
} from "./components/customers";

export default combineReducers({
  [loginConfig.STATE_KEY]: loginReducers,
  [addFriendConfig.STATE_KEY]: FriendsReducers,
  [ExpensesConfig.STATE_KEY]: ExpensesReducers,
  [CustomerConfig.STATE_KEY]: customersReducers
});
