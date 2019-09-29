import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {
  const {
    items,
    placeholder,
    handleOnSelect
  } = props;
console.log("props==", props);
  const renderSelectOptions = () => {
    console.log("items==", items);
   return items.map(function(item, index) {
      return (
        <option key={index} value={item.value}>{item.label}</option>
      )
    });
  }

  const handleOnChange = (e) => {
    console.log("e==", e.target.value);
    const value  = e.target.value;
    handleOnSelect(value)
  }

  return (
    <select
    onChange={handleOnChange}>
      <option value="">{placeholder}</option>
      {renderSelectOptions()}
    </select>
  );
};

Select.propTypes = {
  items: PropTypes.array,
  handleOnSelect : PropTypes.func
};

export default Select;
