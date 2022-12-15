import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

export default function ComponentToPrint({ orderInfo }) {
  return (
    <div className="m-5 p-5 border">
      <Row lg={2}>
        <Col>
          <ul>
            <li> Customer Name: {orderInfo.customerInfo?.name}</li>
            <li> Customer Mobile: {orderInfo.customerInfo?.mobileNumber}</li>
            <li> Email: {orderInfo.customerInfo?.email} </li>
            <li> Reference No.: {orderInfo.referenceNumber}</li>
            <li> Transection ID : 84/b,</li>
            <li> District: {orderInfo.customerInfo?.district} </li>
            <li> Thana: {orderInfo.customerInfo?.thana}</li>
          </ul>
        </Col>
        <Col>
          <Col>
            <ul>
              <li>
                {' '}
                Delivery Charge :{' '}
                {orderInfo.customerInfo?.district === 'Dhaka'
                  ? orderInfo.products?.reduce(
                      (previousValue, currentValue) =>
                        previousValue +
                        Number(
                          currentValue.shippingInDhaka * currentValue.quantity
                        ),
                      0
                    )
                  : orderInfo.products?.reduce(
                      (previousValue, currentValue) =>
                        previousValue +
                        Number(
                          currentValue.shippingOutDhaka * currentValue.quantity
                        ),
                      0
                    )}
              </li>
              <li>Order Status: {orderInfo.status}</li>
              <li>Order Date: {orderInfo.createdAt}</li>
              <li>Shipping Type: {orderInfo.shippingType}</li>
            </ul>
          </Col>
        </Col>
      </Row>
      <Table className="mt-4" hover striped>
        <thead>
          <tr className="bg-dark text-light">
            <th>SI NO</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderInfo.products?.map((product, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{product.title} </td>
              <td>{product.quantity}</td>
              <td>{product.quantity * product.price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td>
              {orderInfo.products?.reduce(
                (previousValue, currentValue) =>
                  previousValue +
                  Number(currentValue.price * currentValue.quantity),
                0
              ) +
                orderInfo.customerInfo?.district ===
              'Dhaka'
                ? orderInfo.products?.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      Number(
                        currentValue.shippingInDhaka * currentValue.quantity
                      ),
                    0
                  )
                : orderInfo.products?.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      Number(
                        currentValue.shippingOutDhaka * currentValue.quantity
                      ),
                    0
                  )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
