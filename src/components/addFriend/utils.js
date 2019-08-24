import * as storageUtils from "../../common/storage";

export const addfriend = (name, email) => {
  const friends = storageUtils.getStorageByKey(storageUtils.FRIENDS);
  const getFriendsByLoggedInUser = friends["vibha"];
  const exists = getFriendsByLoggedInUser.some((friend) => {
    return friend.email === email && friend.name === name;
  });
  if(!exists) {
    const payload = {
      id : storageUtils.generateID(),
      name,
      email
    };
    storageUtils.setStorageByKey(storageUtils.FRIENDS,
      {...friends , ...getFriendsByLoggedInUser.push(payload)});
    return payload;
  } else {
    return false;
  }
}
