import React from "react";
import PropTypes from "prop-types";

const TextBold = (props) => {
  const {
    result
  } = props;
  return (
    <b> {result} </b>
  );
};

TextBold.propTypes = {
  result: PropTypes.string,
};

export default TextBold;
