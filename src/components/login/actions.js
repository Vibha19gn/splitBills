import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as config from "./config";
import * as utils from "./utils";
import {manageExpense} from "../expenses/actions";
import {actions as expenseActions} from "../expenses"
import {actions as friendsActions} from "../addFriend"
import {addFriendSuccess} from "../addFriend/actions";

export const authenticateSuccess = actionCreator(
  actionTypes.AUTHENTICATE_USER_SUCCESS, "isLoggedIn");

export const authenticateFailure = actionCreator(
  actionTypes.AUTHENTICATE_USER_FAILURE, "isLoggedIn");

export const setUserName = actionCreator(
  actionTypes.SET_USERNAME, "userName");

  export function authenticateLogin(payload) {
  return (dispatch) => {
    const  {
      userName,
      password
    } = payload;
    if(utils.authenticateUser(userName, password)) {
      dispatch(authenticateSuccess(true));
      dispatch(setUserName(userName));
      const data = utils.getRequiredDataFromStorage(userName);
      const {
        expenses,
        friends
      } = data;
      dispatch(expenseActions.manageExpense(expenses));
      dispatch(friendsActions.addFriendSuccess(friends));
    } else {
      dispatch(authenticateFailure(false));
    }
  };
}
