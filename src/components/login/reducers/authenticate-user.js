export const users = (state = null, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER_SUCCESS':
      return true;
    case 'AUTHENTICATE_USER_FAILURE':
      return false;
    default:
      return state;
  }
};

export default users;
