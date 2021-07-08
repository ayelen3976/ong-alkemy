import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalContact = ({ 
  show, 
  setShow,
  contactData 
}) => {

  const handleClose = () => setShow(false);

  return ( 
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="table-contact__modal-header">
        <Modal.Title>{contactData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="table-contact__modal-body">
        <h5>email: {contactData.email}</h5>
        <h5>teléfono: {contactData.phone}</h5>
        <h5>Mensaje: {contactData.message}</h5>
      </Modal.Body>
      <Modal.Footer className="table-contact__modal-footer">
        <Button 
          className="table-contact__modal-button" 
          variant="secondary" 
          onClick={handleClose}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
 
export default ModalContact;