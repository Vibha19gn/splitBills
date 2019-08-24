import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddFriend from "../addFriend";
import { AddExpense, Expenses} from "../expenses";

const Main = (props) => {
  return (
    <Row>
      <Col sm={4}>
        Friends
        Expenses
      </Col>
      <Col sm={8}>
        List items
      </Col>
      <Col sm={4}>
        <AddFriend/>
        <Expenses/>
        <AddExpense/>
      </Col>
    </Row>
  );
}

export default Main;
