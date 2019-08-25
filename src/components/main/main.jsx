import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {AddFriend, Friends} from "../friends";
import {AddExpense, Expenses} from "../expenses";
import {Redirect, NavLink, Route, Switch} from "react-router-dom";
import Header from "../../common/header";
import Footer from "../../common/footer";

const Main = (props) => {
  return (
    <>
      <Header/>
      <div
        className="main-wrapper container-fluid h-100">
        <Row
          className="content">
          <Col sm={2}
               className="sidenav">
            <ul
              className="menu-list">
              <li><NavLink to="/expense">Expenses</NavLink></li>
              <li><NavLink to="/friends">Friends</NavLink></li>
            </ul>
          </Col>
          <Col sm={8}
          className="md-col-bg">
            <Switch>
              <Route path="/friends" component={Friends}/>
              <Route path="/expense" component={Expenses}/>
              <Redirect to="/expense"/>
            </Switch>
          </Col>
          <Col sm={2}
               className="sidenav">
            <span>Quick links</span>
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
      </div>
      <Footer/>
    </>
  );
}

export default Main;
