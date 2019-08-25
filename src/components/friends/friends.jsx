import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup';
import FormField from "../../common/form-field";
import FriendModal from "./components/friend-modal-container";
import Col from "react-bootstrap/Col";
import {AddFriend} from "../friends";
import {debounce, filterListBySearchterm} from "../../common/utils";

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

  const debouncedOnChange = debounce((e) => {
    const {
      value
    } = e.target;
    if (value.length > 2) {
      const filteredList = filterListBySearchterm(friendsList, value, ["name", "email"]);
      setFriendsList([...filteredList]);
    } else if(!value) {
      console.log("seriouslyy")
      setFriendsList([...list]);
    }

  }, 300);

  const handleOnChange = (e) => {
    e.persist();
    debouncedOnChange(e);
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
                {renderFriendsList()}
              </ListGroup>
          </> : <AddFriend/>
      }
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
