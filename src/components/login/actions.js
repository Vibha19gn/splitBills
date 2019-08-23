import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as config from "./config";
import * as utils from "./utils";

export const authenticateSuccess = actionCreator(
  actionTypes.AUTHENTICATE_USER_SUCCESS, "");

export const authenticateFailure = actionCreator(
  actionTypes.AUTHENTICATE_USER_FAILURE, "");


  export function authenticateLogin(payload) {
  return (dispatch) => {
    const  {
      email,
      password
    } = payload;
    if(utils.authenticateUser(email, password)) {
      dispatch(authenticateSuccess(true));
    } else {
      dispatch(authenticateFailure(false));
    }
  };
}
