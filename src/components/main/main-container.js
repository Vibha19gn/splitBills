import {connect} from "react-redux";
import Main from "./main";
import {selectors as userSelectors} from "../login";

const mapStateToProps = (state) => {
  return {
    "userName" : userSelectors.getUserName(state)
  };
};

const mapDispatchToProp = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Main);
