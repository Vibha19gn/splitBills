import React, {useState} from 'react';
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormFieldName from "../form-field-names";
import MessageBar from "../../../common/message-bar";

const LoginForm = (props) => {
  const initialFormState = {[FormFieldName.USER_NAME]: "", [FormFieldName.PASSWORD]: ""};
  const [login, setLogin] = useState(initialFormState);
  const {
    isLoggedIn,
    authenticateUser
  } = props;

  const handleOnChange = (e) => {
    const {
      name,
      value
    } = e.target;
    const obj = {};
    obj[name] = value
    setLogin({
      ...login,
      ...obj
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    authenticateUser(login);
  }


  return (
    <div className="login">
      <div className="logo d-flex justify-content-center">
        <span>SplitBills</span>
      </div>
      <div className="login-form">
        <Form>
          {
            isLoggedIn === false &&
            <MessageBar
              message="User name or password is invalid"/>
          }
          <Form.Group>
            <Form.Label>
              User name
            </Form.Label>
            <Form.Control
              required
              name={FormFieldName.USER_NAME}
              placeholder="Enter User name"
              onChange={handleOnChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              required
              name={FormFieldName.PASSWORD}
              type="password"
              placeholder="Enter Password"
              onChange={handleOnChange}/>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              type="submit"
              onClick={handleOnSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default LoginForm;
