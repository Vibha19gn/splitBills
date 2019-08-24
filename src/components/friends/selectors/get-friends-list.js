import getFriends from "./get-friends";
import {createSelector} from "reselect";

export default createSelector(
  [
    getFriends
  ],
  (friends) => {
    console.log("friends list selctor==", friends);
    const {
      list
    } = friends;
    return list || [];
  }
);
