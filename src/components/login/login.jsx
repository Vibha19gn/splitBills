import React from 'react';
import Main from "../main";
import LoginForm from "./components/login-form";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';

const Login = (props) => {
  const {
    isLoggedIn,
    authenticateUser
  } = props;

  return (
    <Row>
      {
        isLoggedIn === true ? <Main/> :
          <LoginForm
            isLoggedIn={isLoggedIn}
            authenticateUser={authenticateUser}
          />
      }
    </Row>
  );
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Login;