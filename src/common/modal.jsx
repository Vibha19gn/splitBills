import React, {useState} from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalDialog = (props) => {
  const {
    show,
    handleOnSubmit,
    handleOnClose,
    children,
    title,
    submitMode
  } = props;

  return (
    <Modal
      show={show}
      onHide={handleOnClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOnSubmit}>
          {submitMode}
        </Button>
        <Button variant="secondary" onClick={handleOnClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalDialog.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  children: PropTypes.array,
  title: PropTypes.string,
  submitMode: PropTypes.string
};

export default ModalDialog;
