import * as storageUtils from "../../common/storage";

// export const addfriend = (name, email) => {
//   const friends = storageUtils.getStorageByKey(storageUtils.FRIENDS);
//   const getFriendsByLoggedInUser = friends["vibha"];
//   const exists = getFriendsByLoggedInUser.some((friend) => {
//     return friend.email === email && friend.name === name;
//   });
//   if(!exists) {
//     const payload = {
//       id : storageUtils.generateID(),
//       name,
//       email
//     };
//     storageUtils.setStorageByKey(storageUtils.FRIENDS,
//       {...friends , ...getFriendsByLoggedInUser.push(payload)});
//     return payload;
//   } else {
//     return false;
//   }
// }

export const manageFriend = (friend, userName, mode) => {
  const allFriends = storageUtils.getStorageByKey(storageUtils.FRIENDS);
  const getFriendsByLoggedInUser = allFriends[userName];
  if(mode === "Add") {
    const {
      email,
      name
    } = friend;
    const exists = getFriendsByLoggedInUser.some((friend) => {
      return friend.email === email && friend.name === name;
    });
    if(!exists) {
      friend["id"] = storageUtils.generateID();
      getFriendsByLoggedInUser.push(friend);
      storageUtils.setStorageByKey(storageUtils.FRIENDS,  getFriendsByLoggedInUser);
      return getFriendsByLoggedInUser;
    }
    return false;
  } else if(mode === "Edit") {
    const index = getFriendsByLoggedInUser.findIndex((friendItem) => {
      return friendItem.id === friend.id;
    });
    const friendToUpdate = {...getFriendsByLoggedInUser[index], ...friend};
    getFriendsByLoggedInUser[index] = friendToUpdate;
    storageUtils.setStorageByKey(storageUtils.FRIENDS, allFriends);
    return allFriends[userName];
  }
  return null
}

export const deleteFriend = (friendId, userName) => {
  const allFriends = storageUtils.getStorageByKey(storageUtils.FRIENDS);
  const list = allFriends[userName].filter((friend) => {
    return friend.id !== friendId;
  });
  allFriends[userName] = list;
  storageUtils.setStorageByKey(storageUtils.FRIENDS, allFriends);
  return list;
}
