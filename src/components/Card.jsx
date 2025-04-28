import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Item from "./Item";

function Card({ title, description, price, imageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleCardClick = (e) => {
    // Prevent modal from opening when clicking the Add to Cart button
    if (!e.target.closest(".add-to-cart")) {
      handleShow();
    }
  };

  return (
    <>
      <div className="gr-wid" onClick={handleCardClick}>
        <div className="card-img-wrapper">
          <div className="card-img-container">
            <img src={imageUrl} className="card-img-top" alt={title} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-content">
            <h3 className="card-title" style={{ color: "white" }}>
              {title}
            </h3>
            <div className="card-price-section">
              <p className="price">$ {price}</p>
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShow();
                }}
              >
                <FaCartPlus />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Item
        show={showModal}
        handleClose={handleClose}
        watch={{ title, description, price, imageUrl }}
      />
    </>
  );
}

export default Card;
