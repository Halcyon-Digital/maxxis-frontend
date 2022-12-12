import React from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../../components/ProductTable';
import AdminLayout from '../../shared/AdminLayout';

export default function DashboardProduct() {
  return (
    <AdminLayout>
      <Link className="link" to="/dashboard/products/create">
        New Product
      </Link>
      <ProductTable />
    </AdminLayout>
  );
}
