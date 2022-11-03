import { Link } from "react-router-dom";

export default function DashboardSidebarContent() {
  return (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/products">products</Link>
      </li>
      <li>
        <Link to="/dashboard/customers">Customer</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">Categories</Link>
      </li>
      <li>
        <Link to="/dashboard/reports">Reports</Link>
      </li>
      <li>
        <Link to="/dashboard/news">News</Link>
      </li>
      <li>
        <Link to="/dashboard/banner">Banner Image</Link>
      </li>
      <li>
        <Link to="/dashboard/requests">Dealer Requests</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Tire Range</Link>
      </li>
      <li>
        <Link to="/dashboard/arrivals">Arrivals</Link>
      </li>
      <li>
        <Link to="/dashboard/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/dashboard/jobs">Jobs</Link>
      </li>
      <li>
        <Link to="/dashboard/admin">Make Admin</Link>
      </li>
    </ul>
  );
}
