import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrderForm from "./OrderForm";
import "../assets/sass/components/_order.scss";
import Cart from "./Cart";
import PopUp from "./PopUp";

function Order() {
  const [isOnline, setIsOnline] = useState(false);

  const online = () => setIsOnline(!isOnline);

  return (
    <section className="order">
      <Container>
        <Row>
          <Col lg={8}>
            <OrderForm />
          </Col>
          <Col lg={4}>
            <Cart />
            <button onClick={online}>Online Payment</button>
            <button>Cash on Delivery</button>
          </Col>
        </Row>
      </Container>
      {isOnline && <PopUp online={online} />}
    </section>
  );
}

export default Order;
