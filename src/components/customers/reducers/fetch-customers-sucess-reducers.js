export const customers = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS_SUCCESS':
      return action.customers;
    default:
      return state;
  }
};

export default customers;
