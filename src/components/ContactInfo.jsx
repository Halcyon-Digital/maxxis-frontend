import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdLocationPin } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFax } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '../assets/sass/components/_contactInfo.scss';
import Title from './Title';
import ContactForm from './ContactForm';

function ContactInfo() {
  return (
    <section className="contact-info">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="mt-5"></div>
            <Title
              spanItem="Contact"
              main="info"
              classList="title__back"
              mainClass="black__border"
            />
            <h4 className="mb-2 mt-5">Head Office:</h4>
            <div className="d-flex mb-2">
              <div className="icon">
                <MdLocationPin />
              </div>

              <p style={{ width: '300px' }} className="ms-3">
                Shahabuddin Trade Center 1230, D.T. Road, Dhaniala Para,
                Kadamtali, Chattogram-4100, Bangladesh.
              </p>
            </div>

            <h4 className="mb-2 mt-4">Dhaka Office:</h4>

            <div className="d-flex mb-2 ">
              <div className="icon">
                <MdLocationPin />
              </div>
              <p style={{ width: '300px' }} className="ms-3">
                Navana Rahim Ardent, Suitet#C-2 (2nd Floor) 185, Shahid Syed
                Nazrul Islam Sharani, Bijoynagar, Kakrail, Dhaka-1000,
                Bangladesh.
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
          <Col lg={7}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactInfo;
