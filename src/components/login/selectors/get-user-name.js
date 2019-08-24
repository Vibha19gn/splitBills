import getUserDetails from "./get-user-details";
import {createSelector} from "reselect";

export default createSelector(
  [
    getUserDetails
  ],
  (userDetails) => {
    const {
      userName
    } = userDetails;
    return userName;
  }
);
