import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AddFriend, Friends} from "../friends";
import {AddExpense, Expenses} from "../expenses";
import {Redirect, NavLink, Route, Switch} from "react-router-dom";

const Main = (props) => {
  return (
    <Row>
      <Col sm={3}>
        <ul>
          <li><NavLink to="/expense">Expenses</NavLink></li>
          <li><NavLink to="/friends">Friends</NavLink></li>
        </ul>
      </Col>
      <Col sm={6}>
        <Switch>
          <Route path="/friends" component={Friends}/>
          <Route path="/expense" component={Expenses}/>
          <Redirect to="/expense"/>
        </Switch>
      </Col>
      <Col sm={3}>
        <ul>
          <li>
            <AddFriend/>
          </li>
          <li>
            <AddExpense/>
          </li>
        </ul>
      </Col>
    </Row>
);
}

export default Main;
