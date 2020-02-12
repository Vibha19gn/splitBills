import {connect} from "react-redux";
import Customers from "./customers";
import * as selectors  from "./selectors";
import {fetchCustomers} from './actions';

export const mapStateToProps = (state) => {
  return {
    customers: selectors.getCustomers(state)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomers: () => {
      dispatch(fetchCustomers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
