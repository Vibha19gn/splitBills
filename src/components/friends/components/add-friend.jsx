import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import FriendModal from "./friend-modal-container";
import Badge from "react-bootstrap/Badge";

const AddFriend = (props) => {
  const [show, setShow] = useState(false);

  const handleOnShow = () => setShow(true);
  const handleOnClose = () => setShow(false);

  return (
    <>
      <Badge
        variant="secondary"
        onClick={handleOnShow}>
        Add Friend
      </Badge>
      <FriendModal
        show={show}
        handleOnClose={handleOnClose}
      />
    </>
  );
}

AddFriend.propTypes = {
  submitRequest: PropTypes.func
};

export default AddFriend;
