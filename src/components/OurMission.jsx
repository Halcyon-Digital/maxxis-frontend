import React from 'react';
import AboutImage from '../assets/images/about-us.png';
import { Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import '../assets/sass/components/_ourmission.scss';

function OurMission() {
  return (
    <section className="about-us">
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <div className="mt-5"></div>
            <Title
              spanItem="Our"
              main="Mission"
              classList="title__back"
              mainClass="black__border"
            />
            <p className="caption">
              We are observing rational increased sales growth, and our aim is
              to become the fastest growing and most progressive tire importer
              and wholesaler in Bangladesh, with the vision of becoming the
              number one independent tire importer and wholesaler nationwide. We
              are growing strongly compared to our reference markets. We are
              enhancing our efficiency and productivity at all times. We think
              “in the market for the market”. We are safeguarding our growth in
              the long term with a solid and balanced financing profile.
              facilisis.
            </p>

            <p>
              Anchored by a strong commitment to our values, we have formed
              close partnerships with our corporate customers and thereby
              creating and retaining lifelong customers.
            </p>
            <p>
              Our adherence to the highest ethical standards means that we are
              unfailingly honest. We are accountable for everything we provide
              and are consistently fair to all of our customers. Hard work is
              central to our goals and we reward the efforts to our employees.
            </p>
          </Col>
          <Col>
            <img
              className="img-fluid"
              src={AboutImage}
              alt="about-us"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurMission;
