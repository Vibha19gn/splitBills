import {connect} from "react-redux";
import ExpensesModal from "./expense-modal";
import * as actions from "../actions.js";
import * as selectors from "../selectors";

const mapStateToProps = (state) => {
  return {
    //showModal: selectors.
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    submitRequest: (expense, friends, mode) => {
      dispatch(actions.submitRequest(expense, friends, mode))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(ExpensesModal);
