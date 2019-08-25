import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as utils from "./utils";
import {selectors as userSelectors} from "../login";

export const manageExpense = actionCreator(
  actionTypes.MANAGE_EXPENSE, "data");

export function submitRequest(expense, friends, mode) {
  return (dispatch, getState) => {
    const state = getState();
    const userName = userSelectors.getUserName(state);
    const response = utils.manageExpense(expense, friends, userName, mode);
    dispatch(manageExpense(response));
  };
}

export function deleteExpense(expenseId) {
  return (dispatch, getState) => {
    const state = getState();
    const userName = userSelectors.getUserName(state);
    const response = utils.deleteExpense(expenseId, userName);
    dispatch(manageExpense(response));
  };
}

