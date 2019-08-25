import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = (props) => {
  const {} = props;

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container
          className="container-fluid">
          <Navbar.Brand href="/expense">SplitBills</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Hello : Vibha
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  show: PropTypes.bool,
};

export default Header;
