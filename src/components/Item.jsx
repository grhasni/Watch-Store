import React from "react";
import { Modal, Button } from "react-bootstrap";

const Item = ({ show, handleClose, watch }) => {
  if (!watch) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{watch.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <div className="row">
          <div className="col-md-6">
            <img src={watch.imageUrl} alt={watch.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4>{watch.title}</h4>
            <p>{watch.description}</p>
            <h5>Price: ${watch.price}</h5>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Item;
