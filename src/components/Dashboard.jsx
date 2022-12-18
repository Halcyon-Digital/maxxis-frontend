import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { allNews, allOrders, allProducts } from '../api/fetchData';
import '../assets/sass/components/admin/_dashboard.scss';
import OrdersTable from './OrdersTable';

export default function Dashboard() {
  const { data } = useQuery('allProducts', () => allProducts());
  const { data: blogs } = useQuery('category', () => allNews());
  const { data: orders } = useQuery('orders', () => allOrders());
  const pending = orders?.filter((order) => order.status === 'pending');
  const processing = orders?.filter((order) => order.status === 'processing');
  const completed = orders?.filter((order) => order.status === 'completed');
  const cancel = orders?.filter((order) => order.status === 'cancel');

  return (
    <div className="dashboard-main">
      <h3>Dashboard</h3>
      <Row lg={4}>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Pending Orders</h5>
            <h4>{pending?.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Processing Orders</h5>
            <h4>{processing?.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Completed Orders</h5>
            <h4>{completed?.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Total Orders</h5>
            <h4>{orders?.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>All Products</h5>
            <h4>{data && data.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Blog</h5>
            <h4>{blogs?.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Invoices</h5>
            <h4>{orders?.length}</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Cancel Orders</h5>
            <h4>{cancel?.length}</h4>
          </div>
        </Col>
      </Row>

      <h4>Latest Orders</h4>

      {/* <OrdersTable /> */}
    </div>
  );
}
