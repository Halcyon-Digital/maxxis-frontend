import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaProductHunt } from 'react-icons/fa';
import {
  AiOutlinePullRequest,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { GoReport } from 'react-icons/go';
import { GiCarWheel } from 'react-icons/gi';
import { HiNewspaper } from 'react-icons/hi';
import { SiFampay } from 'react-icons/si';
import { MdFormatSize } from 'react-icons/md';
import { BsFillChatSquareQuoteFill } from 'react-icons/bs';
import { GiKnightBanner, GiAirplaneArrival } from 'react-icons/gi';
import {
  RiGalleryLine,
  RiHandbagLine,
  RiAdminLine,
  RiVideoLine,
} from 'react-icons/ri';

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
        <NavLink to="/dashboard/orders">
          <span>
            <AiOutlineShoppingCart />
          </span>{' '}
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/customers">
          <span>
            <AiOutlineUser />
          </span>{' '}
          Users
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
        <NavLink to="/dashboard/video">
          <span>
            <RiVideoLine />
          </span>{' '}
          Video
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
        <NavLink to="/dashboard/tire_size">
          <span>
            <MdFormatSize />
          </span>{' '}
          Tire Size
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
        <NavLink to="/dashboard/bkash">
          <span>
            <SiFampay />
          </span>{' '}
          Bkash
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
        <NavLink to="/dashboard/jobs-request">
          <span>
            <BsFillChatSquareQuoteFill />
          </span>{' '}
          Job Requests
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
