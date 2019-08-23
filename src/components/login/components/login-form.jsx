import React, {Component} from 'react';
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormFieldName from "../form-field-names";
import MessageBar from "../../../common/message-bar";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [FormFieldName.EMAIL]: "",
      [FormFieldName.PASSWORD]: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(name, e) {
    const value = e.target.value;
    const obj = {};
    obj[name] = value
    this.setState(obj);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const {
      authenticateUser
    } = this.props;
    authenticateUser(this.state)
  }

  render() {
    const {
      isLoggedIn
    } = this.props;
    return (
      <Form>
        {
          isLoggedIn === false &&
          <MessageBar
            message="Email or password is invalid"/>
        }
        <Form.Group>
          <Form.Label>
            Email address
          </Form.Label>
          <Form.Control
            required
            placeholder="Enter email"
            onChange={this.handleOnChange.bind(this, FormFieldName.EMAIL)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={this.handleOnChange.bind(this, FormFieldName.PASSWORD)}/>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={this.handleOnSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default LoginForm;
