import React, {Component} from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from "../components/login";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Login}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
}

export default App;
