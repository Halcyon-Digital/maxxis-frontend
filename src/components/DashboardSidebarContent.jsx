import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaProductHunt } from 'react-icons/fa';
import { AiOutlineUser, AiOutlinePullRequest } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { GoReport } from 'react-icons/go';
import { GiCarWheel } from 'react-icons/gi';
import { HiNewspaper } from 'react-icons/hi';
import { GiKnightBanner, GiAirplaneArrival } from 'react-icons/gi';
import { RiGalleryLine, RiHandbagLine, RiAdminLine } from 'react-icons/ri';

export default function DashboardSidebarContent() {
  return (
    <ul>
      <li>
        <NavLink to="/dashboard/home">
          <span>
            <MdSpaceDashboard />
          </span>{' '}
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/products">
          <span>
            <FaProductHunt />
          </span>{' '}
          products
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/customers">
          <span>
            <AiOutlineUser />
          </span>{' '}
          Customer
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/categories">
          <span>
            <BiCategory />
          </span>{' '}
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/reports">
          <span>
            <GoReport />
          </span>{' '}
          Reports
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/news">
          <span>
            <HiNewspaper />
          </span>{' '}
          News
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/banner">
          <span>
            <GiKnightBanner />
          </span>{' '}
          Banner Image
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/requests">
          <span>
            <AiOutlinePullRequest />
          </span>{' '}
          Dealer Requests
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/tire_range">
          <span>
            <GiCarWheel />
          </span>{' '}
          Tire Range
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/arrivals">
          <span>
            <GiAirplaneArrival />
          </span>{' '}
          Arrivals
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/gallery">
          <span>
            <RiGalleryLine />
          </span>{' '}
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/jobs">
          <span>
            <RiHandbagLine />
          </span>{' '}
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin">
          <span>
            <RiAdminLine />
          </span>{' '}
          Make Admin
        </NavLink>
      </li>
    </ul>
  );
}
