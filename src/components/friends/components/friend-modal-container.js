import {connect} from "react-redux";
import FriendModal from "./friend-modal";
import * as actions from "../actions.js";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProp = (dispatch) => {
  return {
    submitRequest: (friend, mode) => {
      dispatch(actions.submitRequest(friend, mode))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(FriendModal);
