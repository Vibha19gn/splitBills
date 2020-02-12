import getFetchCustomers from "./selector";

export default (state) => {
  const {
    customers = []
  } = getFetchCustomers(state) || [];
  return customers;
};
