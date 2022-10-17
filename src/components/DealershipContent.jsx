import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../assets/sass/components/_dealershipContent.scss";
import DealerForm from "./DealerForm";
import Title from "./Title";

function DealershipContent() {
  return (
    <section className="dealership">
      <Container>
        <Row>
          <Col>
            <Title
              spanItem="Dealer"
              main=""
              classList="title__back"
              mainClass="black__border"
            />

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
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
