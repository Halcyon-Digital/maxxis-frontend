import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeStatus } from '../../api/fetchData';
import Loading from '../../components/Loading';
import AdminLayout from '../../shared/AdminLayout';
import { alrtSuccess } from '../../utils/common';

export default function DashboardOrderDetails() {
  const { key } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const { token } = useSelector((state) => state.auth.user);
  const [orderInfo, setOrderInfo] = useState({});

  console.log(orderInfo);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_PROXY}/api/v1/orders/${key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrderInfo(res.data);
    };
    data();
  }, [key, isSuccess]);

  const updateStatus = async (status) => {
    const confirm = window.confirm('Do you want change status.');
    if (confirm) {
      const data = await changeStatus({ key, body: status, token });
      setIsSuccess(!isSuccess);
      alrtSuccess(data.message);
    }
  };

  return (
    <AdminLayout>
      {orderInfo.customerInfo ? (
        <div className="p-3">
          <Row lg={2}>
            <Col>
              <ul>
                <li> Customer Name: {orderInfo.customerInfo.name}</li>
                <li> Customer Mobile: {orderInfo.customerInfo.mobileNumber}</li>
                <li> Email: {orderInfo.customerInfo.email} </li>
                <li> Reference No.: {orderInfo.referenceNumber}</li>
                <li> Transection ID : 84/b,</li>
                <li> dhalkanagar lane gandaria</li>
                <li> District: {orderInfo.customerInfo.district} </li>
                <li> Thana: {orderInfo.customerInfo.thana}</li>
                <li>
                  {' '}
                  Delivery Charge :{' '}
                  {orderInfo.customerInfo.district === 'Dhaka'
                    ? orderInfo.products.reduce(
                        (previousValue, currentValue) =>
                          previousValue +
                          Number(
                            currentValue.shippingInDhaka * currentValue.quantity
                          ),
                        0
                      )
                    : orderInfo.products.reduce(
                        (previousValue, currentValue) =>
                          previousValue +
                          Number(
                            currentValue.shippingOutDhaka *
                              currentValue.quantity
                          ),
                        0
                      )}
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Order Status: {orderInfo.status}</li>
                <li>Order Date: {orderInfo.createdAt}</li>
                <Button className="mt-2" variant="warning">
                  Invoice
                </Button>{' '}
              </ul>
            </Col>
          </Row>
          <div className="mt-3 mb-4">
            <Button
              onClick={() => updateStatus({ status: 'pending' })}
              variant="secondary"
            >
              Pending
            </Button>{' '}
            <Button
              onClick={() => updateStatus({ status: 'cancel' })}
              variant="danger"
            >
              Cancel
            </Button>{' '}
            <Button
              onClick={() => updateStatus({ status: 'processing' })}
              variant="warning"
            >
              Processing
            </Button>{' '}
            <Button
              onClick={() => updateStatus({ status: 'shipped' })}
              variant="primary"
            >
              Shipped
            </Button>{' '}
            <Button
              onClick={() => updateStatus({ status: 'completed' })}
              variant="success"
            >
              Completed
            </Button>{' '}
          </div>
          <Table hover striped>
            <thead>
              <tr className="bg-dark text-light">
                <th>SI NO</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderInfo.products.map((product, i) => (
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
                  {orderInfo.products.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      Number(currentValue.price * currentValue.quantity),
                    0
                  ) +
                    orderInfo.customerInfo.district ===
                  'Dhaka'
                    ? orderInfo.products.reduce(
                        (previousValue, currentValue) =>
                          previousValue +
                          Number(
                            currentValue.shippingInDhaka * currentValue.quantity
                          ),
                        0
                      )
                    : orderInfo.products.reduce(
                        (previousValue, currentValue) =>
                          previousValue +
                          Number(
                            currentValue.shippingOutDhaka *
                              currentValue.quantity
                          ),
                        0
                      )}
                </td>
              </tr>
              {/* {data.map((product, i) => (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td>{product.title} </td>
              <td>{product.stockQuantity}</td>
              <td>{product.price}</td>
            </tr>
          ))} */}
            </tbody>
          </Table>
        </div>
      ) : (
        <Loading />
      )}
    </AdminLayout>
  );
}
