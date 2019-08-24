import {connect} from "react-redux";
import Friends from "./friends";
import * as actions from "./actions.js";
import * as selectors from "./selectors";

const mapStateToProps = (state) => {
  return {
    list: selectors.getFriendsList(state)
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    onDelete: (friendId) => {
      dispatch(actions.deleteFriend(friendId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Friends);
