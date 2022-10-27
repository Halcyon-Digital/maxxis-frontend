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
        <Link to="/dashboard/products">Customer</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Categories</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Reports</Link>
      </li>
      <li>
        <Link to="/dashboard/products">News</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Banner Image</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Dealer Requests</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Tire Range</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Arrivals</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Gallery</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Jobs</Link>
      </li>
      <li>
        <Link to="/dashboard/products">Make Admin</Link>
      </li>
    </ul>
  );
}
