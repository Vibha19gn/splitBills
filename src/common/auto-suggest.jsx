import React, {useEffect, useState} from "react";
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

  /* useEffect(
     () => {
       setList(items);
     },
     [props]
   );*/

  const debouncedOnChange = debounce((e) => {
    const {
      value
    } = e.target;
    //console.log("change==in auto suggest", e,value);
    //if(value.length > 3) {
    setSearchTerm(value);
    const suggestions = autoSuggestList(value, items);
    setList([...suggestions]);
    // }
  }, 300);

  const handleOnChange = (e) => {
    //console.log("in filter==", e);
    e.persist();
    debouncedOnChange(e);
  }


  const renderList = () => {
    return list.map((listItem) => {
      return (
        <ListGroup.Item
          key={listItem.id}
          onClick={() =>
            handleOnClick(listItem)
          }
        >
          <span>{listItem[useProp]}</span>
        </ListGroup.Item>
      );
    });
  }

  return (
    <>
      <FormField
        name="searchTerm"
        placeholder={placeholder}
        handleOnChange={handleOnChange}
      />
      <ListGroup>
        {renderList()}
      </ListGroup>
    </>
  );
};

AutoSuggest.propTypes = {
  list: PropTypes.object
};

export default AutoSuggest;
