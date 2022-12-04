import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DistributorImage from '../assets/images/distributor.png';
import '../assets/sass/components/_distributor.scss';
import Title from './Title';

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
              SWAN International has been collaborating with Cheng Shin Rubber
              Ind. Co. Ltd to help expand its business globally since the year
              1996. In our efforts to succeed, we have become one of the leading
              tire importers in Bangladesh. SWAN International awarded the best
              distributor of the year 2011 in South Asia by Cheng Shin Rubber
              Industry Co. Ltd. This achievement goes to our employees, our
              distributors and especially to Cheng Shin Rubber Industry
              marketing team who always support us in our good time and our bad
              time. We are promoting Bicycle Tires (BC), Motorcycles Tires (MC),
              Passenger Car Radial Tires (PCR), Light Truck Bias Tires (LTB),
              Truck Bus Bias Tires (TBB), Truck Bus Radial Tires (TBR),
              Industrial Tires, and Off the Road Tires (OTR), to meet our
              domestic needs. Both LTB and TBR sector we are the No#1 in
              Bangladesh. Our import locations include Taiwan, Thailand,
              Vietnam, India and China.
            </p>
            <button>Read More</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Distributor;
