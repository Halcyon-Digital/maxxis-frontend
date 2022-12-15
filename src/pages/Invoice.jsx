import { Button, Container } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../components/ComponentToPrint';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Invoice() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_PROXY}/api/v1/orders/${id}`
      );
      setOrderInfo(res.data);
    };
    data();
  }, [id]);

  console.log(orderInfo);

  const componentRef = useRef();
  return (
    <section>
      <Container>
        <div>
          <ReactToPrint
            trigger={() => (
              <Button
                variant="warning"
                className="position-absolute top-0 end-0"
              >
                Print this out!
              </Button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef}>
            {orderInfo && <ComponentToPrint orderInfo={orderInfo} />}
          </div>
        </div>
        <Link className="link" to="/">
          Back To Home
        </Link>
      </Container>
    </section>
  );
}
