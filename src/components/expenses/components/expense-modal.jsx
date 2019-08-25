import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ModalDialog from "../../../common/modal";
import FormField from "../../../common/form-field";
import AutoSuggest from "../../../common/auto-suggest";
import {amountShared} from "../utils";
import {AddFriend} from "../../friends";

const ExpenseModal = (props) => {
  const {
    show,
    handleOnClose,
    currentExpense,
    friendsOfUser
  } = props;
  let initialFormState = {id: "", title: "", amount: ""};
  let initialFriends = [];
  const [allFriends, setAllFriends] = useState([]);
  const [mode, setMode] = useState("Add");
  const [expense, setExpense] = useState(initialFormState);
  const [friends, setFriends] = useState(initialFriends);


  useEffect(
    () => {
      setAllFriends([...friendsOfUser]);
      if (currentExpense) {
        const {
          title,
          amount,
          friends,
          id
        } = currentExpense;

        setMode("Edit");
        setExpense({...{id: id, title: title, amount: amount}});
        setFriends([...friends]);
      } else {
        setFriends([]);
      }
    },
    [props]
  );

  const handleOnClick = (friend) => {
    const exists = friends.some((frnd) => {
      return frnd.id === friend.id;
    });
    if (!exists) {
      friends.push(friend);
      setFriends([...friends]);
    }
  }


  const handleOnChange = (e) => {
    const {
      name,
      value
    } = e.target;
    const obj = {};
    obj[name] = value
    setExpense({
      ...expense,
      ...obj
    });
  }


  const handleOnSubmit = () => {
    const {
      submitRequest
    } = props;
    submitRequest(expense, friends, mode);
    handleOnClose();
  }

  const handleOnDelete = (friendId) => {
    const updateList = friends.filter((friend) => {
      return friend.id !== friendId;
    });
    setFriends([...updateList]);
  }

  const renderSelectedFriendsList = () => {
    if (friends.length) {
      const {
        amount
      } = expense;
      const {
        sharedAmount,
        lentAmount
      } = amountShared(friends.length, amount);
      const list = friends.map((friend) => {
        return (
          <li
            key={friend.id}
          >
            <span><span
              className="person-name">{friend.name}</span> owes you : &#8377;{sharedAmount}</span>
            <i
              className="fa fas fa-minus-square"
              onClick={() =>
                handleOnDelete(friend.id)
              }
            ></i>
          </li>
        );
      });
      return (
        <div
          className="manage-amount">
          <div><span
            className="person-name">You</span> lent : &#8377;{lentAmount}</div>
          <ul
            className="friends-list">{list}</ul>
        </div>
      )
    }
    return null;
  }

  return (
    <ModalDialog
      show={show}
      title="Add Expense"
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
      { allFriends.length ?
        <AutoSuggest
          items={allFriends}
          useProp="name"
          placeholder="Select friends"
          handleOnClick={handleOnClick}
        /> :  <AddFriend/>
      }
      {renderSelectedFriendsList()}
    </ModalDialog>
  );
}

ExpenseModal.propTypes = {
  submitRequest: PropTypes.func
};

export default ExpenseModal;
