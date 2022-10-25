import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrderForm from "./OrderForm";
import "../assets/sass/components/_order.scss";
import Cart from "./Cart";

function Order() {
  return (
    <section className="order">
      <Container>
        <Row>
          <Col lg={8}>
            <OrderForm />
          </Col>
          <Col lg={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Order;
