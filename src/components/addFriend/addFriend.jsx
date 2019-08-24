import React, {useState} from 'react';
import PropTypes from "prop-types";
import ModalDialog from "../../common/modal";
import FormField from "../../common/form-field";
import Badge from "react-bootstrap/Badge";

const AddFriend = (props) => {
  const initialFormState = {name: '', email: ''};
  const [friend, setFriend] = useState(initialFormState);
  const [show, setShow] = useState(false);

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

  const handleOnClose = () => setShow(false);
  const handleOnShow = () => setShow(true);

  const handleOnSubmit = () => {
    const {
      submitRequest
    } = props;
    submitRequest(friend);
    setShow(false);
  }

  return (
    <>
      <Badge
        variant="secondary"
        onClick={handleOnShow}>Add a friend</Badge>
      <ModalDialog
        show={show}
        handleOnClose={handleOnClose}
        handleOnSubmit={handleOnSubmit}>
        <FormField
          label="Name"
          name="name"
          placeholder="Name"
          handleOnChange={handleOnChange}
        />
        <FormField
          label="Email"
          name="email"
          placeholder="Email"
          handleOnChange={handleOnChange}
        />
      </ModalDialog>
    </>
  );
}

AddFriend.propTypes = {
  submitRequest: PropTypes.func
};

export default AddFriend;
