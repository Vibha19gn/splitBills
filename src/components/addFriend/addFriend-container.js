import {connect} from "react-redux";
import addFriend from "./addFriend";
import * as actions from "./actions.js";
//import * as selectors from "./selectors";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProp = (dispatch) => {
  return {
    submitRequest: (args) => {
      dispatch(actions.submitRequest(args))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(addFriend);
