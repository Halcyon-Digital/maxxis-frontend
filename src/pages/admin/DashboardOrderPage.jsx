import React from 'react';
import DashboardOrders from '../../components/DashboardOrders';
import AdminLayout from '../../shared/AdminLayout';

export default function DashboardOrderPage() {
  return (
    <AdminLayout>
      <DashboardOrders />
    </AdminLayout>
  );
}
