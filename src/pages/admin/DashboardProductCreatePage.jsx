import React from 'react';
import CreateProduct from '../../components/CreateProduct';
import AdminLayout from '../../shared/AdminLayout';

export default function DashboardProductCreatePage() {
  return (
    <AdminLayout>
      <CreateProduct />
    </AdminLayout>
  );
}
