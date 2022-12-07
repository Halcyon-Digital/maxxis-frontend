import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function OrdersTable({ orders }) {
  const navigate = useNavigate();
  return (
    <Table striped>
      <thead>
        <tr className="bg-dark text-light">
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Delivery Status</th>
          <th>Date (MM-DD-YYYY)</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr>
            <td>{order._id}</td>
            <td>{order.customerInfo.name}</td>
            <td>{order.status}</td>
            <td>{new Date(order.createdAt).toLocaleString()}</td>
            <td>100</td>
            <td>
              <Button
                variant="secondary"
                onClick={() => navigate(`/dashboard/orders/${order._id}`)}
              >
                Show
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
