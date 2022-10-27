import Logo from "../assets/images/logo.png";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { Form } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function AdminHeader() {
  return (
    <header className="dashboard-header align-items-center py-2">
      <div className="dashboard-logo">
        <HashLink to="/">
          <img src={Logo} alt="Logo" />
        </HashLink>
      </div>

      <div className="d-flex justify-content-between align-items-center px-4">
        <div>
          <AiOutlineBars /> <span>Categories</span>
        </div>
        <Form className="d-flex">
          <input
            className="border-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="border-0 search-btn">
            <AiOutlineSearch />
            Search
          </button>
        </Form>

        <button className="search-btn">
          <CgLogOff />
          Logout
        </button>
      </div>
    </header>
  );
}
