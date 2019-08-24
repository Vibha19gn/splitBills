import getExpenses from "./get-expenses";
import {createSelector} from "reselect";

export default createSelector(
  [
    getExpenses
  ],
  (expenses) => {
    console.log("after delete im here==", expenses);
    const {
      list
    } = expenses;
    //const test = [{"id":"_e0yxz6qbn","friends":[{"id":"_alwukbpo4","name":"ramya"}],"title":"Train tickets","amount":"3000"}];
    //return test;
    return list || [];
  }
);
