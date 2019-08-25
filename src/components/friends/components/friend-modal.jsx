import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ModalDialog from "../../../common/modal";
import FormField from "../../../common/form-field";

const FriendModal = (props) => {
  const {
    show,
    handleOnClose,
    currentFriend
  } = props;
  const initialFormState = {id: "", name: "", email: ""};
  const [friend, setFriend] = useState(initialFormState);
  const [mode, setMode] = useState("Add");

  useEffect(
    () => {
      if (currentFriend) {
        const {
          name,
          email,
          id
        } = currentFriend;
        setMode("Edit")
        setFriend({...{id: id, name, email}});
      } else {
        setFriend({...initialFormState});
      }
    },
    [props]
  );

  const handleOnChange = (e) => {
    const {
      name,
      value
    } = e.target;
    const obj = {};
    obj[name] = value
    setFriend({
      ...friend,
      ...obj
    });
  }

  const handleOnSubmit = () => {
    const {
      submitRequest
    } = props;
    submitRequest(friend, mode);
    handleOnClose();
  }

  return (
    <>
      <ModalDialog
        show={show}
        title="Add Friend"
        submitMode={mode}
        handleOnClose={handleOnClose}
        handleOnSubmit={handleOnSubmit}>
        <FormField
          label="Name"
          name="name"
          value={friend.name}
          placeholder="Enter name"
          handleOnChange={handleOnChange}
        />
        <FormField
          label="Email"
          value={friend.email}
          name="email"
          placeholder="Enter email"
          handleOnChange={handleOnChange}
        />
      </ModalDialog>
    </>
  );
}

FriendModal.propTypes = {
  submitRequest: PropTypes.func
};

export default FriendModal;
