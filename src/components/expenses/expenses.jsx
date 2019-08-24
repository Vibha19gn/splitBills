import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from "react-bootstrap/Badge";
import ExpenseModal from "./components/expense-modal-container";

const Expenses = (props) => {
  const {
    list,
    onDelete
  } = props;
  const [currentExpense, setCurrentExpense] = useState(null);
  const [expensesList, setExpensesList] = useState([]);
  const [show, setShow] = useState(false);
  console.log("AIYYO AIYYO==", props);

  useEffect(
    () => {
      setExpensesList(list);
    },
    [props]
  );

  const handleOnClose = () => setShow(false);

  const handleOnEdit = (expenseId) => {
    console.log("expenseId=", expenseId);
    const toUpdate = list.find((expense) => {
      return expense.id === expenseId
    });
    console.log("toUpdate=", toUpdate);
    setCurrentExpense(toUpdate);
    setShow(true);
  }

  const handleOnDelete = (expenseId) => {
    // const list = expensesList.filter((expense) => {
    //   return expense.id === expenseId
    // });
    // list = list.length ? list : [];
    // setExpensesList([...list]);
    onDelete(expenseId);
  }

  const renderExpensesList = () => {
    return expensesList.map((expense) => {
      return (
        <ListGroup.Item
          key={expense.title}
        >
          <span>{expense.title}</span>
          <span>{expense.amount}</span>
          <Badge
            variant="secondary"
            onClick={() =>
              handleOnEdit(expense.id)
            }>Edit</Badge>
          <Badge
            variant="secondary"
            onClick={() =>
              handleOnDelete(expense.id)
            }>Delete</Badge>
        </ListGroup.Item>
      );
    });
  }

  return (
    <>
      <ListGroup>
        {renderExpensesList()}
      </ListGroup>
      <ExpenseModal
        show={show}
        handleOnClose={handleOnClose}
        currentExpense={currentExpense}
      />
    </>
  );
}

Expenses.propTypes = {
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  list: PropTypes.array
};

export default Expenses;
