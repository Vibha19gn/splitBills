import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup'
import Col from "react-bootstrap/Col";
import FormField from "../../common/form-field";
import ExpenseModal from "./components/expense-modal-container";
import {AddExpense} from "../expenses";
import {debounce, filterListBySearchterm} from "../../common/utils";

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

  const debouncedOnChange = debounce((e) => {
    const {
      value
    } = e.target;
    if (value.length > 2) {
      const filteredList = filterListBySearchterm(expensesList, value, ["title", "amount"]);
      setExpensesList([...filteredList]);
    } else if(!value) {
      setExpensesList([...list]);
    }

  }, 300);

  const handleOnChange = (e) => {
    e.persist();
    debouncedOnChange(e);
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
      {
        list.length ?
          <>
            <div className="d-flex justify-content-end">
              <FormField
                name="filterTerm"
                placeholder="Filter"
                handleOnChange={handleOnChange}
              />
            </div>
          <ListGroup>
            {renderExpensesList()}
          </ListGroup>
          </>: <AddExpense/>
      }
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
