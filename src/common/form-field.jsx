import React, {useState} from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form"

const FormField = (props) => {
  const {
    handleOnChange,
    placeholder,
    label,
    value,
    name
  } = props;

  return (
    <Form.Group>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        required
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}/>
    </Form.Group>
  );
};

FormField.propTypes = {
  handleOnChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string
};

export default FormField;
