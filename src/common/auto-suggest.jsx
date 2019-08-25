import React, {useState} from "react";
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup';
import FormField from "./form-field";
import {debounce, autoSuggestList} from "./utils";

const AutoSuggest = (props) => {
  const {
    items,
    useProp,
    handleOnClick,
    placeholder
  } = props;

  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);


  const onClick = (item) => {
    handleOnClick(item);
    setShow(false);
  }

  const debouncedOnChange = debounce((e) => {
    const {
      value
    } = e.target;
    setSearchTerm(value);
    const suggestions = autoSuggestList(value, items);
    setList([...suggestions]);
    setShow(true);
  }, 300);

  const handleOnChange = (e) => {
    e.persist();
    debouncedOnChange(e);
  }

  const renderList = () => {
    return list.map((listItem) => {
      return (
        <ListGroup.Item
          key={listItem.id}
          onClick={() =>
            onClick(listItem)
          }
        >
          <span>{listItem[useProp]}</span>
        </ListGroup.Item>
      );
    });
  }

  return (
    <div
      className="auto-suggest">
      <FormField
        name="searchTerm"
        placeholder={placeholder}
        handleOnChange={handleOnChange}
      />
      {show &&
      <ListGroup
        className="auto-suggest-list">
        {renderList()}
      </ListGroup>
      }
    </div>
  );
};

AutoSuggest.propTypes = {
  list: PropTypes.object
};

export default AutoSuggest;
