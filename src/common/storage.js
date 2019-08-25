export const USERS = "user";
export const FRIENDS = "friends";
export const EXPENSES = "expenses";

export const getStorageByKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getDataByUserName = (key, userName) => {
  const dataSet = JSON.parse(localStorage.getItem(key));
  return dataSet[userName] || [];
};

export const getAllUsers = () => {
  return JSON.parse(localStorage.getItem(USERS));
};

export const setStorageByKey = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const generateID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
