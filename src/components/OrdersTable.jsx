import { Table } from "react-bootstrap";

export default function OrdersTable() {
  return (
    <Table striped>
      <thead>
        <tr className="bg-dark text-light">
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Delivery Status</th>
          <th>Date</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>121</td>
          <td>Halcyon Digital</td>
          <td>Pending</td>
          <td>2022-11-01 05:43:17</td>
          <td>100</td>
          <td>
            <button>Show</button>
          </td>
        </tr>
        <tr>
          <td>121</td>
          <td>Halcyon Digital</td>
          <td>Pending</td>
          <td>2022-11-01 05:43:17</td>
          <td>100</td>
          <td>
            <button>Show</button>
          </td>
        </tr>
        <tr>
          <td>121</td>
          <td>Halcyon Digital</td>
          <td>Pending</td>
          <td>2022-11-01 05:43:17</td>
          <td>100</td>
          <td>
            <button>Show</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
