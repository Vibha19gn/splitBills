import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import * as utils from "./utils";
import * as selectors from "./selectors";
import {selectors as userSelectors} from "../login";

export const manageExpense = actionCreator(
  actionTypes.MANAGE_EXPENSE, "data");

// export const showExpenseModal = actionCreator(
//   actionTypes.SHOW_EXPENSE_MODAL, "action");

export function submitRequest(expense, friends, mode) {
  return (dispatch, getState) => {
    console.log("payload expense==", expense, friends);
    const state = getState();
    const userName = userSelectors.getUserName(state);
    const response = utils.manageExpense(expense, friends, userName, mode);
    console.log("response aiyyo==",response);
    dispatch(manageExpense(response));
  };
}

export function deleteExpense(expenseId) {
  return (dispatch, getState) => {
    console.log("delete expense==", expenseId);
    const state = getState();
    const userName = userSelectors.getUserName(state);
    const response = utils.deleteExpense(expenseId, userName);
    console.log("delete aiyyo==", response);
    dispatch(manageExpense(response));
  };
}

