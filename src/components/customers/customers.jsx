import React, {Component} from "react";
import Proptypes from "prop-types";
import Grid from "../grid";
import {columns} from "./config";
import Row from "./components/row"

class Customers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show:false
    }
  }

  componentDidMount() {
    const {
      fetchCustomers
    } = this.props;
    fetchCustomers();
  }

  render() {
    const {
      customers = []
    } = this.props;
    return (
      customers &&
      <Grid
        rows={customers}
        columns={columns}
        id={"customer-table"}
        rowComponent={Row}
      />
    )
  }

}


Customers.proptypes = {
  "results": Proptypes.array
};

export default Customers;
