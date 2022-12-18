import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import SwanLogo from '../assets/images/swan-international.webp';
import MaxxisLogo from '../assets/images/logo.png';
import CST from '../assets/images/cst-icon.png';
import PresaLogo from '../assets/images/PresaLogo.png';

export default function ComponentToPrint({ orderInfo }) {
  const charge =
    orderInfo.customerInfo?.district === 'Dhaka'
      ? orderInfo.products?.reduce(
          (previousValue, currentValue) =>
            previousValue +
            Number(currentValue.shippingInDhaka * currentValue.quantity),
          0
        )
      : orderInfo.products?.reduce(
          (previousValue, currentValue) =>
            previousValue +
            Number(currentValue.shippingOutDhaka * currentValue.quantity),
          0
        );

  return (
    <div className="print-area">
      <div className=" p-4">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <img src={SwanLogo} alt="" />
          </div>
          <div>
            <img src={MaxxisLogo} alt="" />
          </div>
        </div>
        <Row lg={2}>
          <Col>
            <ul>
              <li> Customer Name: {orderInfo.customerInfo?.name}</li>
              <li> Customer Mobile: {orderInfo.customerInfo?.mobileNumber}</li>
              <li> Email: {orderInfo.customerInfo?.email} </li>
              <li> Reference No.: {orderInfo.referenceNumber}</li>
              <li> District: {orderInfo.customerInfo?.district} </li>
              <li> Thana: {orderInfo.customerInfo?.thana}</li>
              <li> Address: {orderInfo.customerInfo?.address} </li>
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
                            currentValue.shippingOutDhaka *
                              currentValue.quantity
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
              <td>Delivery</td>
              <td></td>
              <td>{charge}</td>
            </tr>
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
                ) + charge}
              </td>
            </tr>
          </tbody>
        </Table>
        <p>Notes: </p>
        <p>1. Price is vat & Tax inclusive </p>
        <p>
          2. For any return and exchange, customer needs to inform customer care
          within 24 hours of receiving the products
        </p>

        <p className="mt-5">
          Head Office: 1230, D.T. Road, Kadamtali, Chattogram-4100, Bangladesh,
          Phone : +880-31-710235, Fax: +880-31-710235, Web: www.maxxis.com.bd
          Dhaka Office : Navana Rahim Ardent, Apt #c-2(2nd Floor), 185, Sahid
          Sayed Nazrul Islam Sharani, Bijoynagar, Kakrail, Dhaka-1000,
          Bangladesh, Phone:+880-02-49349936, Web:www.csttires.com.bd
        </p>
        <div className="d-flex justify-content-between mb-4 mt-5">
          <img src={MaxxisLogo} alt="" />
          <img style={{ width: '150px' }} src={CST} alt="" />
          <img style={{ width: '150px' }} src={PresaLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
