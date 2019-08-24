import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from "react-bootstrap/Badge";
import FriendModal from "./components/friend-modal-container";

const Friends = (props) => {
  const {
    list,
    onDelete
  } = props;
  const [currentFriend, setCurrentFriend] = useState(null);
  const [friendsList, setFriendsList] = useState([]);
  const [show, setShow] = useState(false);
  console.log("In friends friendId==", props);

  useEffect(
    () => {
      setFriendsList(list);
    },
    [props]
  );

  const handleOnClose = () => setShow(false);

  const handleOnEdit = (friendId) => {
    console.log("friendId=", friendId);
    const toUpdate = friendsList.find((friend) => {
      return friend.id === friendId
    });
    console.log("friendId toUpdate=", toUpdate);
    setCurrentFriend(toUpdate);
    setShow(true);
  }

  const handleOnDelete = (friendId) => {
    onDelete(friendId);
  }

  const renderExpensesList = () => {
    return friendsList.map((friend) => {
      return (
        <ListGroup.Item
          key={friend.id}
        >
          <span>{friend.name}</span>
          <span>{friend.email}</span>
          <Badge
            variant="secondary"
            onClick={() =>
              handleOnEdit(friend.id)
            }>Edit</Badge>
          <Badge
            variant="secondary"
            onClick={() =>
              handleOnDelete(friend.id)
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
      <FriendModal
        show={show}
        handleOnClose={handleOnClose}
        currentFriend={currentFriend}
      />
    </>
  );
}

Friends.propTypes = {
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  list: PropTypes.array
};

export default Friends;
