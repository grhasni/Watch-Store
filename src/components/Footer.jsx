import React from "react";

function Footer() {
  return (
    <>
      <div className="wrapper">
        <div className="button">
          <div className="icon" id="whatsapp">
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon" id="facebook">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon" id="instagram">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="last text-white">
        <div className="text ">
          We have the best new models of world class watches. We always stock
          market and specialty products. We strive to make our customers never
          have to go back
        </div>
        <div className="links ">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="contact ">
          <h3>Contact</h3>
          Phone : 1234567890 <br />
          Email : something@something.com
        </div>
      </div>

      <hr />
      <div className="copyright text-white">
        <div className="textcopyright">
          Copyright ©2023. All Rights Reserved. — Designed with love by
        </div>
        <div className="gold-text">Watch Shop</div>
      </div>
    </>
  );
}

export default Footer;
