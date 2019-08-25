import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup'
import Col from "react-bootstrap/Col";
import ExpenseModal from "./components/expense-modal-container";

const Expenses = (props) => {
  const {
    list,
    onDelete
  } = props;
  const [currentExpense, setCurrentExpense] = useState(null);
  const [expensesList, setExpensesList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      setExpensesList(list);
    },
    [props]
  );

  const handleOnClose = () => setShow(false);

  const handleOnEdit = (expenseId) => {
    const toUpdate = list.find((expense) => {
      return expense.id === expenseId
    });
    setCurrentExpense(toUpdate);
    setShow(true);
  }

  const handleOnDelete = (expenseId) => {
    onDelete(expenseId);
  }

  const renderExpensesList = () => {
    return expensesList.map((expense) => {
      return (
        <ListGroup.Item
          key={expense.title}
        >
          <Col sm={4}>{expense.title}</Col>
          <Col sm={2}>&#8377;{expense.amount}</Col>
          <Col sm={2}
               className="list-icon">
            <i
              className="fa fas fa-edit"
              onClick={() =>
                handleOnEdit(expense.id)
              }></i>
            <i
              className="fa fas fa-minus-square"
              onClick={() =>
                handleOnDelete(expense.id)
              }></i>
          </Col>
        </ListGroup.Item>
      );
    });
  }

  return (
    <div
      className="content-list">
      <h3>Expenses</h3>
      <ListGroup>
        {renderExpensesList()}
      </ListGroup>
      <ExpenseModal
        show={show}
        handleOnClose={handleOnClose}
        currentExpense={currentExpense}
      />
    </div>
  );
}

Expenses.propTypes = {
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  list: PropTypes.array
};

export default Expenses;
