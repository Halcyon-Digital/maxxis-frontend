import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { AiOutlineUser, AiOutlinePullRequest } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { HiNewspaper } from "react-icons/hi";
import { GiKnightBanner, GiAirplaneArrival } from "react-icons/gi";
import { RiGalleryLine, RiHandbagLine, RiAdminLine } from "react-icons/ri";

export default function DashboardSidebarContent() {
  return (
    <ul>
      <li>
        <Link to="/dashboard">
          <span>
            <MdSpaceDashboard />
          </span>{" "}
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/dashboard/products">
          <span>
            <FaProductHunt />
          </span>{" "}
          products
        </Link>
      </li>
      <li>
        <Link to="/dashboard/customers">
          <span>
            <AiOutlineUser />
          </span>{" "}
          Customer
        </Link>
      </li>
      <li>
        <Link to="/dashboard/categories">
          <span>
            <BiCategory />
          </span>{" "}
          Categories
        </Link>
      </li>
      <li>
        <Link to="/dashboard/reports">
          <span>
            <GoReport />
          </span>{" "}
          Reports
        </Link>
      </li>
      <li>
        <Link to="/dashboard/news">
          <span>
            <HiNewspaper />
          </span>{" "}
          News
        </Link>
      </li>
      <li>
        <Link to="/dashboard/banner">
          <span>
            <GiKnightBanner />
          </span>{" "}
          Banner Image
        </Link>
      </li>
      <li>
        <Link to="/dashboard/requests">
          <span>
            <AiOutlinePullRequest />
          </span>{" "}
          Dealer Requests
        </Link>
      </li>
      <li>
        <Link to="/dashboard/products">
          <span></span> Tire Range
        </Link>
      </li>
      <li>
        <Link to="/dashboard/arrivals">
          <span>
            <GiAirplaneArrival />
          </span>{" "}
          Arrivals
        </Link>
      </li>
      <li>
        <Link to="/dashboard/gallery">
          <span>
            <RiGalleryLine />
          </span>{" "}
          Gallery
        </Link>
      </li>
      <li>
        <Link to="/dashboard/jobs">
          <span>
            <RiHandbagLine />
          </span>{" "}
          Jobs
        </Link>
      </li>
      <li>
        <Link to="/dashboard/admin">
          <span>
            <RiAdminLine />
          </span>{" "}
          Make Admin
        </Link>
      </li>
    </ul>
  );
}
