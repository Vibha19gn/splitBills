export const manageFriends = (state = [], action) => {
  switch (action.type) {
    case 'MANAGE_FRIEND':
      return action.data;
    default:
      return state;
  }
};

export default manageFriends;
