import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DistributorImage from "../assets/images/distributor.png";
import "../assets/sass/components/_distributor.scss";
import Title from "./Title";

function Distributor() {
  return (
    <section className="distributor">
      <Container>
        <div className="maxxis">
          <Title
            spanItem="Maxxis"
            main="Bangladesh"
            classList="title__back"
            mainClass="black__border"
          />
        </div>
        <Row xs={1} md={2}>
          <Col>
            <img
              className="w-100"
              src={DistributorImage}
              alt="distributor"
              loading="lazy"
            />
          </Col>
          <Col>
            <h4>The Sole Distributor Of Maxxis Tires</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
            <button>Read More</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Distributor;
