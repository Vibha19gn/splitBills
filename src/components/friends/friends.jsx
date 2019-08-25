import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup'
import FriendModal from "./components/friend-modal-container";
import Col from "react-bootstrap/Col";

const Friends = (props) => {
  const {
    list,
    onDelete
  } = props;
  const [currentFriend, setCurrentFriend] = useState(null);
  const [friendsList, setFriendsList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      setFriendsList(list);
    },
    [props]
  );

  const handleOnClose = () => setShow(false);

  const handleOnEdit = (friendId) => {
    const toUpdate = friendsList.find((friend) => {
      return friend.id === friendId
    });
    setCurrentFriend(toUpdate);
    setShow(true);
  }

  const handleOnDelete = (friendId) => {
    onDelete(friendId);
  }

  const renderFriendsList = () => {
    return friendsList.map((friend) => {
      return (
        <ListGroup.Item
          key={friend.id}
        >
          <Col sm={3}>{friend.name}</Col>
          <Col sm={3}>{friend.email}</Col>
          <Col sm={2}
               className="list-icon">
            <i
              className="fa fas fa-edit"
              onClick={() =>
                handleOnEdit(friend.id)
              }
            ></i>
            <i
              className="fa fas fa-minus-square"
              onClick={() =>
                handleOnDelete(friend.id)
              }
            ></i>
          </Col>
        </ListGroup.Item>
      );
    });
  }

  return (
    <div
      className="content-list">
      <h3>Friends</h3>
      <ListGroup>
        {renderFriendsList()}
      </ListGroup>
      <FriendModal
        show={show}
        handleOnClose={handleOnClose}
        currentFriend={currentFriend}
      />
    </div>
  );
}

Friends.propTypes = {
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  list: PropTypes.array
};

export default Friends;
