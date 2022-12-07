import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import OrdersTable from './OrdersTable';

export default function DashboardOrders() {
  const { token } = useSelector((state) => state.auth.user);
  const [page, setPage] = useState(0);
  let size = 8;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_PROXY}/api/v1/orders/all?page=${page}&size=${size}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setOrders(res.data);
        });
    };
    data();
  }, [page, size]);

  const backPage = () => {
    if (page === 0) {
      return setPage(0);
    }
    setPage((prevState) => prevState - 1);
  };

  return (
    <div>
      <OrdersTable orders={orders} />
      <div className="text-center">
        <Button className="me-1" variant="secondary" onClick={backPage}>
          Prev
        </Button>
        <Button
          className="ms-1"
          variant="secondary"
          onClick={(e) => setPage((prevState) => prevState + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
