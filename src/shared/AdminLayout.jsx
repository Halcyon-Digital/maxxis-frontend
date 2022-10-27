import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import "../assets/sass/components/_dashboardLayout.scss";
import AdminHeader from "../components/AdminHeader";
import DashboardSidebarContent from "../components/DashboardSidebarContent";

function AdminLayout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="dashboard-content">
        <div>
          <Row>
            <Col className="dashboard-colum sidebar" lg={2}>
              <DashboardSidebarContent />
            </Col>
            <Col className="dashboard-colum" lg={10}>
              {children}
            </Col>
          </Row>
        </div>
      </div>
      <footer className="dashboard-footer">
        © 2022 Maxxis - Crafted with by Halcyon.
      </footer>
    </>
  );
}

export default AdminLayout;
