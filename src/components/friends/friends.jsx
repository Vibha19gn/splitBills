import React, {Component} from 'react';
import PropTypes from "prop-types";

class Friends extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>Friends List</div>
    );
  }
}

Friends.propTypes = {
  posts: PropTypes.array
};

export default Friends;
