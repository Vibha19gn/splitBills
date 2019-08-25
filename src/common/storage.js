export const USERS = "users";
export const FRIENDS = "friends";
export const EXPENSES = "expenses";

export const getStorageByKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getDataByUserName = (key, userName) => {
  const dataByKey = localStorage.getItem(key);
  if(dataByKey) {
    const dataSet = JSON.parse(localStorage.getItem(key));
     if(!(dataSet.hasOwnProperty(userName))) {
       dataSet[userName] = [];
       localStorage.setItem(key, JSON.stringify(dataSet));
     } else {
       dataSet[userName] = dataSet[userName].length ? dataSet[userName] : [];
     }
    return dataSet[userName];
  } else {
    const obj = {};
    obj[userName] = [];
    localStorage.setItem(key, JSON.stringify(obj));
  }
};

export const getAllUsers = () => {
  const data = localStorage.getItem(USERS);
  if(data) {
    return JSON.parse(localStorage.getItem(USERS));
  }
  return null;
};

export const setStorageByKey = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const generateID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const setUsers = () => {
  if(!getAllUsers()) {
    const data = [{"userName": "vibha", "password": "pass@345"}, {"userName": "user1", "password": "pass@123"}];
    localStorage.setItem(USERS, JSON.stringify(data));
  }
}
