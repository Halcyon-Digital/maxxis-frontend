import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SponsorImage from '../assets/images/Sponsor.png';
// import "../assets/sass/components/_Sponsor.scss";

function Sponsor() {
  return (
    <section className="distributor">
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <h4>Proud Sponsors Of Rajshahi Royals</h4>
            <p>
              We were the proud sponsor of Rajshahi Royals, which was the
              champion of 2019-20 season and is one of the most successful teams
              in Bangladeshi franchise Twenty20 cricket teams. The team is based
              in Rajshahi in Bangladesh and competes in the Bangladesh Premier
              League (BPL), a Twenty20 franchise cricket competition.
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
