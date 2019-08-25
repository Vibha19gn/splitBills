import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as utils from "./utils";
import {selectors as userSelectors} from "../login";

export const manageFriend = actionCreator(
  actionTypes.MANAGE_FRIEND, "data");

export const addFriendFailure = actionCreator(
  actionTypes.ADD_FRIEND_FAILURE, "error");

export function submitRequest(friend, mode) {
  return (dispatch, getState) => {
    const state = getState();
    const userName = userSelectors.getUserName(state);
    const response = utils.manageFriend(friend, userName, mode);
    if (response) {
      dispatch(manageFriend(response));
    } else {
      dispatch(addFriendFailure("Could not add the friend.Please try later."));
    }

  };
}

export function deleteFriend(friendId) {
  return (dispatch, getState) => {
    const state = getState();
    const userName = userSelectors.getUserName(state);
    const response = utils.deleteFriend(friendId, userName);
    dispatch(manageFriend(response));
  };
}
