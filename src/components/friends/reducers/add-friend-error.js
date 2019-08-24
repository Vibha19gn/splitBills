export const addFriendError = (state = null, action) => {
  switch (action.type) {
    case 'ADD_FRIEND_FAILURE':
      return action.error;
    default:
      return state;
  }
};

export default addFriendError;
