import React, {Component} from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from "../components/customers";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Customers/>
    );
  }
}

export default App;
