import {connect} from "react-redux";
import Login from "./Login";
import * as actions from "./actions.js";
import * as selectors from "./selectors";

const mapStateToProps = (state) => {
  return {
    "isLoggedIn": selectors.getAuth(state)
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    authenticateUser: (args) => {
        dispatch(actions.authenticateLogin(args))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Login);
