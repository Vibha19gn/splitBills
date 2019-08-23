import React, {useState} from "react";
import PropTypes from "prop-types";
import Alert from 'react-bootstrap/Alert'

const MessageBar = (props) => {

  const [show, showError] = useState(true);
  const {
    message,
    variant
  } = props || {};

  return (
    show &&
    <Alert variant={variant} onClose={() => showError(false)} dismissible>
      <p>
        {message}
      </p>
    </Alert>
  );
};

MessageBar.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string
};

MessageBar.defaultProps = {
  variant: "warning"
};

export default MessageBar;
