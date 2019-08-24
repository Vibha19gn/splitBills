export const addFriendSuccess = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRIEND_SUCCESS':
      return action.data;
    default:
      return state;
  }
};

export default addFriendSuccess;
