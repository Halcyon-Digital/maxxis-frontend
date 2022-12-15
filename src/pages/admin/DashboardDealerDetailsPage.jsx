import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../shared/AdminLayout';

export default function DashboardDealerDetailsPage() {
  const { slug } = useParams();
  const [dealer, setDealer] = useState({});

  useEffect(() => {
    const dealerInfo = async () => {
      axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/dealer/${slug}`)
        .then((res) => setDealer(res.data))
        .catch((error) => console.log(error.message));
    };
    dealerInfo();
  }, [slug]);

  return (
    <AdminLayout>
      <Row className="p-5">
        <Col>
          <p>Name: {dealer.name}</p>
          <p>{dealer.companyName}</p>
          <p>{dealer.email}</p>
          <p>{dealer.mobile}</p>
          <p>{dealer.message}</p>
        </Col>
        <Col>
          <img
            className="img-fluid"
            src={`${process.env.REACT_APP_PROXY}/files/${dealer.file}`}
            alt="dealer Request"
          />
        </Col>
      </Row>
    </AdminLayout>
  );
}
