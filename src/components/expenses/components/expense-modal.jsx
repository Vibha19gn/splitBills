import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ModalDialog from "../../../common/modal";
import FormField from "../../../common/form-field";
import AutoSuggest from "../../../common/auto-suggest";

const ExpenseModal = (props) => {
  const {
    show,
    handleOnClose,
    currentExpense,
    friendsOfUser
  } = props;
  console.log("currentExpense =", currentExpense);
  let initialFormState = {id: "", title: "", amount: ""};
  let initialFriends = [];
  const [allFriends, setAllFriends] = useState([]);
  const [mode, setMode] = useState("Add");
  const [expense, setExpense] = useState(initialFormState);
  const [friends, setFriends] = useState(initialFriends);


  useEffect(
    () => {
      setAllFriends([...friendsOfUser]);
      if(currentExpense) {
        const {
          title,
          amount,
          friends,
          id
        } = currentExpense;

        setMode("Edit");
        setExpense({...{id: id, title: title, amount: amount}});
        setFriends([...friends]);
      }
    },
    [ props ]
  );

  const handleOnClick = (friend) => {
    console.log("friend== handleOnClick", friend);
    const exists = friends.some((frnd) => {
      return frnd.id === friend.id;
    });
    if(!exists) {
      friends.push(friend);
      setFriends([...friends]);
    }
  }


  const handleOnChange = (e) => {
    const {
      name,
      value
    } = e.target;
    console.log("change==", name, value);
    const obj = {};
    obj[name] = value
    setExpense({
      ...expense,
      ...obj
    });
  }


  const handleOnSubmit = () => {
    console.log("submit expense==", expense, friends);
    const {
      submitRequest
    } = props;
    submitRequest(expense, friends, mode);
    handleOnClose();
  }

  const manageAmount = () => {
    const {
      amount
    } = expense;
    const sharedAmount =  Math.floor(amount/(friends.length + 1));
    return sharedAmount;
  }

  const getLentAmount = () => {
    const {
      amount
    } = expense;
    const lentAmount = amount -  Math.floor(amount/(friends.length + 1));
    return lentAmount;
  }

  const renderSelectedFriendsList = () => {
    console.log("renderSelectedFriendsList==", friends);
    if(friends.length) {
      console.log("renderSelectedFriendsList12==", friends, manageAmount());
      const list = friends.map((friend) => {
        return (
          <li
            key={friend.id}
          >
            {friend.name} owes you {manageAmount()}
          </li>
        );
      });
      return (
        <>
        <div>You lent : {getLentAmount()}</div>
        <ul>{list}</ul>
        </>
      )
    }
    return null;
  }

  return (
      <ModalDialog
        show={show}
        handleOnClose={handleOnClose}
        submitMode={mode}
        handleOnSubmit={handleOnSubmit}>
        <FormField
          label="Title"
          name="title"
          value={expense.title}
          placeholder="Name"
          handleOnChange={handleOnChange}
        />
        <FormField
          label="Amount"
          name="amount"
          value={expense.amount}
          placeholder="Add Amount"
          handleOnChange={handleOnChange}
        />
        <AutoSuggest
          items={allFriends}
          useProp="name"
          handleOnClick={handleOnClick}
        />
        {renderSelectedFriendsList()}
      </ModalDialog>
  );
}

ExpenseModal.propTypes = {
  submitRequest: PropTypes.func
};

export default ExpenseModal;
