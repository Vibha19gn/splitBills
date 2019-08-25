import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form"

const FormField = (props) => {
  const {
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
    placeholder,
    label,
    value,
    name
  } = props;

  return (
    <Form.Group>
      {
        label &&
        <Form.Label>
          {label}
        </Form.Label>
      }
      <Form.Control
        required
        name={name}
        value={value}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onBlur={handleOnBlur}/>
    </Form.Group>
  );
};

FormField.propTypes = {
  handleOnChange: PropTypes.func,
  handleOnBlur: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string
};

export default FormField;
