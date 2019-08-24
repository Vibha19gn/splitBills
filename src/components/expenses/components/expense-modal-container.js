import {connect} from "react-redux";
import ExpensesModal from "./expense-modal";
import * as actions from "../actions.js";
import * as selectors from "../selectors";
import {selectors as friendsSelectors} from "../../friends";

const mapStateToProps = (state) => {
  return {
    friendsOfUser: friendsSelectors.getFriendsList(state)
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
