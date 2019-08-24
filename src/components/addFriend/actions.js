import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as utils from "./utils";

export const addFriendSuccess = actionCreator(
  actionTypes.ADD_FRIEND_SUCCESS, "data");

 export const addFriendFailure = actionCreator(
   actionTypes.ADD_FRIEND_FAILURE, "error");


export function submitRequest(payload) {
  return (dispatch) => {
    console.log("add fiend 1", payload);
    const {
      name,
      email
    } = payload;
    const response = utils.addfriend(name, email);
    if(response) {
      dispatch(addFriendSuccess(response));
    } else {
      dispatch(addFriendFailure("Could not add the friend.Please try later."));
    }
  };
}
