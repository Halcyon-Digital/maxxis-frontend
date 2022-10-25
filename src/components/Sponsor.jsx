import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SponsorImage from "../assets/images/Sponsor.png";
// import "../assets/sass/components/_Sponsor.scss";

function Sponsor() {
  return (
    <section className="distributor">
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <h4>Proud Sponsors Of Rajshahi Royals</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
          </Col>
          <Col>
            <img className="w-100" src={SponsorImage} alt="sponsor" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Sponsor;
