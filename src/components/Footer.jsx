import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import FooterImage from "../assets/images/footer-logo.png";
import "../assets/sass/components/_footer.scss";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import { AiOutlineMail, AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <Container>
        <Row xs={1} md={3}>
          <Col>
            <div>
              <img
                className="img-fluid"
                src={FooterImage}
                alt="maxxis"
                loading="lazy"
              />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <div className="social-icon d-flex">
              <div className="icon">
                <ImFacebook />
              </div>
              <div className="icon">
                <BsInstagram />
              </div>
            </div>
          </Col>

          <Col>
            <div className="content">
              <h3>Information</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/products">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/career">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Career
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/news">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    News & Events
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/gallery">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col>
            <h3>Contact Us</h3>

            <div className="d-flex mb-2">
              <div className="icon">
                <MdLocationPin />
              </div>
              <p className="ms-3">
                Navana Rahim ardent, Apt#C 2(2nd Floor)’ 185 Shaheed Nazrul
                Islam Sharoni, Bijoynagar, Dhaka
              </p>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <FiPhoneCall />
              </div>
              <a href="tel:+88 02 222220458" className="ms-3 links">
                +88 02 222220458
              </a>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <AiOutlineMail />
              </div>
              <a href="mailto: info@maxxis.com.bd" className="ms-3 links">
                info@maxxis.com.bd
              </a>
            </div>

            <div className="d-flex mb-2">
              <div className="icon">
                <FaFax />
              </div>
              <a href="tel:+88 02 222220458" className="ms-3 links">
                +88 02 49349936
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bottom">
        <AiOutlineCopyrightCircle />
        Copyright. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
