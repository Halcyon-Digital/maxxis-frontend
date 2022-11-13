import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CartItems from './CartItems';
import '../assets/sass/components/_cart.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartElement() {
  const cart = useSelector((state) => state.cart.cart);

  const subTotalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.price * currentValue.quantity),
    0
  );

  return (
    <section className="cart-page">
      <Container>
        <CartItems cart={cart} />
        <div className="mt-5">
          <Row className="align-items-end">
            <Col>
              <div>
                <p className="paragraph">
                  Do you want to buy some more product?
                </p>
                <Link className="continue-shopping" to="/products">
                  Continue Shopping
                </Link>
              </div>
            </Col>
            <Col>
              <p className="paragraph">Cart Total</p>
              <Table className="border" striped="columns">
                <thead>
                  <tr className="bg-dark text-light h-auto">
                    <th>Shipping</th>
                    <th className="text-light">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Include</td>
                    <td>{subTotalPrice}/-</td>
                  </tr>
                </tbody>
              </Table>
              <Link className="continue-shopping" to="/order">
                Proceed to Checkout
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CartElement;
