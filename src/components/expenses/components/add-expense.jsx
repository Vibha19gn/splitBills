import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ExpenseModal from "./expense-modal-container";
import Badge from "react-bootstrap/Badge";

const ExpenseAction = (props) => {
  const [show, setShow] = useState(false);

  const handleOnShow = () => setShow(true);
  const handleOnClose = () => setShow(false);

  return (
    <>
      <Badge
        variant="secondary"
        onClick={handleOnShow}>
        Add Expense
      </Badge>
      <ExpenseModal
        show={show}
        handleOnClose={handleOnClose}
      />
    </>
  );
}

ExpenseAction.propTypes = {
  submitRequest: PropTypes.func
};

export default ExpenseAction;
