import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { allProducts } from '../api/fetchData';
import '../assets/sass/components/admin/_dashboard.scss';
import OrdersTable from './OrdersTable';

export default function Dashboard() {
  const { data } = useQuery('allProducts', () => allProducts());

  return (
    <div className="dashboard-main">
      <h3>Dashboard</h3>
      <Row lg={4}>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Pending Orders</h5>
            <h4>0</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Processing Orders</h5>
            <h4>0</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Completed Orders</h5>
            <h4>0</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Total Orders</h5>
            <h4>0</h4>
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
            <h4>0</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Invoices</h5>
            <h4>0</h4>
          </div>
        </Col>
        <Col>
          <div className="dashboard-main__card-item">
            <h5>Stock Out Products</h5>
            <h4>0</h4>
          </div>
        </Col>
      </Row>

      <h4>Latest Orders</h4>

      <OrdersTable />
    </div>
  );
}
