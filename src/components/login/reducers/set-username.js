export const setUserName = (state = null, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.userName;
    default:
      return state;
  }
};

export default setUserName;
