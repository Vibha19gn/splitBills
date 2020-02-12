import React from "react";
import PropTypes from "prop-types";

const TextLabel = (props) => {
  const {
    className
  } = props;
  return (
    <span
      className={className}>
      {props.children}
    </span>
  );
};

TextLabel.propTypes = {
  result: PropTypes.string,
};

export default TextLabel;
