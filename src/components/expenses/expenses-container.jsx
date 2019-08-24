import {connect} from "react-redux";
import Expenses from "./expenses";
import * as actions from "./actions.js";
import * as selectors from "./selectors";

const mapStateToProps = (state) => {
  return {
    list: selectors.getExpensesList(state)
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    onDelete: (expenseId) => {
      dispatch(actions.deleteExpense(expenseId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Expenses);
