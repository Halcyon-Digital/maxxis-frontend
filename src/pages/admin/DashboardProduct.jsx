import React from "react";
import ProductTable from "../../components/ProductTable";
import AdminLayout from "../../shared/AdminLayout";

export default function DashboardProduct() {
  return (
    <AdminLayout>
      <ProductTable />
    </AdminLayout>
  );
}
