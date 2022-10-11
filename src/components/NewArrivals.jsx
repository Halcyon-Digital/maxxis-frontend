import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image1 from "../assets/images/arrivals1.png";
import "../assets/sass/components/_newArrivals.scss";

function NewArrivals() {
  return (
    <section className="arrivals">
      <Container>
        <div className="d-flex justify-content-between">
          <Title
            spanItem="New"
            main="Arrivals"
            classList="title__back"
            mainClass="black__border"
          />
          <div>
            <IoIosArrowBack className="change__button" />
            <IoIosArrowForward className="change__button" />
          </div>
        </div>

        <div className="arrivals__items">
          <Row xs={1} sm={2} md={3} lg={4}>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
            <Col>
              <div className="item">
                <img src={Image1} alt="arrivals" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default NewArrivals;
