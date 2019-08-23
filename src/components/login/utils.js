import  * as config from "./config";

export const authenticateUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(config.USERS));
  const auth = users.find((user) => {
     return user.email == email && user.password == password;
  });
  return auth ? true : false;
}
