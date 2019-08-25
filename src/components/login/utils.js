import * as storageUtils from "../../common/storage";

export const authenticateUser = (userName, password) => {
  const users = storageUtils.getAllUsers();
  const auth = users.some((user) => {
    return user.userName === userName && user.password === password;
  });
  return auth ? true : false;
};

export const getorSetRequiredDataFromStorage = (userName) => {
  const expenses = storageUtils.getDataByUserName(storageUtils.EXPENSES, userName);
  const friends = storageUtils.getDataByUserName(storageUtils.FRIENDS, userName);
   return {
     expenses,
     friends
   }
}
