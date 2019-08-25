import getFriends from "./get-friends";
import {createSelector} from "reselect";

export default createSelector(
  [
    getFriends
  ],
  (friends) => {
    const {
      list
    } = friends;
    return list || [];
  }
);
