import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../assets/sass/components/_dealershipContent.scss';
import DealerForm from './DealerForm';
import Title from './Title';

function DealershipContent() {
  return (
    <section className="dealership">
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <Title
              spanItem="Dealer"
              main=""
              classList="title__back"
              mainClass="black__border"
            />

            <div className="content">
              <p>
                We are honoured to have one of the most diverse pool of dealers
                in Bangladesh who are our torch-bearers in our quest of market
                expansion in our country. Their relentless support and go all
                out mentality helps us to reach across our entire country. Swan
                International always appreciates and encourages new dealers and
                entrepreneurs in the tire sector to join the family.
              </p>
            </div>
          </Col>
          <Col>
            <DealerForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DealershipContent;
