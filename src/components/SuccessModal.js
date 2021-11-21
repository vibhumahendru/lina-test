import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Success modal component
const SuccessModal = ({showSuccessModal, setShowSuccessModal }) => {
  return (
    <Modal show={showSuccessModal} onHide={()=>setShowSuccessModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your appointment is confirmed!</Modal.Body>
          <Modal.Footer>
            <Button variant="custom" onClick={()=>setShowSuccessModal(false)}>
              Awesome!
            </Button>
          </Modal.Footer>
        </Modal>
)};

export default SuccessModal;
