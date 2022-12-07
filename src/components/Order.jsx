import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OrderForm from './OrderForm';
import '../assets/sass/components/_order.scss';
import Cart from './Cart';
import PopUp from './PopUp';
import PopUpDelivery from './PopUpDelivery';
import { useDispatch } from 'react-redux';
import { addPaymentType } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

function Order() {
  const [isOnline, setIsOnline] = useState(false);
  const [isCash, setIsCash] = useState(false);

  const dispatch = useDispatch();

  const online = () => setIsOnline(!isOnline);
  const cash = () => setIsCash(!isCash);

  return (
    <section className="order">
      <Container>
        <Row>
          <Col lg={8}>
            <OrderForm />
          </Col>
          <Col lg={4}>
            <Cart />
            <button
              onClick={(e) => {
                dispatch(addPaymentType('Online Payment'));
                online();
              }}
            >
              Online Payment
            </button>
            <button
              onClick={(e) => {
                dispatch(addPaymentType('Cash on Delivery'));
                cash();
              }}
            >
              Cash on Delivery
            </button>
          </Col>
        </Row>
      </Container>
      {isOnline && <PopUp online={online} />}
      {isCash && <PopUpDelivery cash={cash} />}
    </section>
  );
}

export default Order;
