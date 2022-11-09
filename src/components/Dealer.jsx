import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import DealerModel from "./DealerModel";

export default function Dealer({ data }) {
  const [modalShow, setModalShow] = useState(false);

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
        {data.map((dealer, index) => (
          <tr key={index}>
            <td>{dealer.name}</td>
            <td>{dealer.companyName}</td>
            <td>{dealer.mobile}</td>
            <td>
              <button onClick={() => setModalShow(true)}>Show</button>
              <DealerModel
                show={modalShow}
                onHide={() => setModalShow(false)}
                dealer={dealer}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
