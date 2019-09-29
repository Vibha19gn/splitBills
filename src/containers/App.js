import React, {Component} from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deployment from "../components/deployment";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Deployment/>
    );
  }
}

export default App;
