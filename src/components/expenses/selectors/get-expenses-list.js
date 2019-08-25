import getExpenses from "./get-expenses";
import {createSelector} from "reselect";

export default createSelector(
  [
    getExpenses
  ],
  (expenses) => {
    const {
      list
    } = expenses;
    return list || [];
  }
);
