import React from 'react';
import Main from "../main";
import LoginForm from "./components/login-form";
import PropTypes from "prop-types";

const Login = (props) => {
  const {
    isLoggedIn,
    authenticateUser
  } = props;

  return (
    <>
      {
        isLoggedIn === true ? <Main/> :
          <LoginForm
            isLoggedIn={isLoggedIn}
            authenticateUser={authenticateUser}
          />
      }
    </>
  );
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Login;
