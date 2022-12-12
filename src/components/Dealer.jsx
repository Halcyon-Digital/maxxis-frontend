import React from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DealerModel from './DealerModel';

export default function Dealer({ data }) {
  // const [modalShow, setModalShow] = useState(false);
  const nevigate = useNavigate();

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Shop Name</th>
          <th>Provider</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((dealer, index) => (
          <tr key={index}>
            <td>{dealer.name}</td>
            <td>{dealer.companyName}</td>
            <td>{dealer.mobile}</td>
            <td>
              <Button
                variant="outline-secondary"
                onClick={() => nevigate(`/dashboard/requests/${dealer._id}`)}
              >
                Show
              </Button>
              <div className="d-none">
                {/*  <DealerModel
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  dealer={dealer}
                /> */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
