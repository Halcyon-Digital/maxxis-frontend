import { Table } from "react-bootstrap";

export default function OrderCard() {
  return (
    <Table striped>
      <thead>
        <tr className="card-bg text-light">
          <th>Products</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Otto</td>
          <td>3200</td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>1200</td>
        </tr>

        <tr>
          <td>Shipping</td>
          <td>1000</td>
        </tr>
        <tr className="card-bg text-light">
          <td>Total</td>
          <td>10100</td>
        </tr>
      </tbody>
    </Table>
  );
}
