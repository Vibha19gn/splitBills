export const error = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS_FAILURE':
      return {};
    default:
      return state;
  }
};

export default error;
