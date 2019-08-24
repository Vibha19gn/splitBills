import getUserDetails from "./get-user-details";
import {createSelector} from "reselect";

export default createSelector(
  [
    getUserDetails
  ],
  (userDetails) => {
    const {
      isLoggedIn
    } = userDetails;
    return isLoggedIn;
  }
);
