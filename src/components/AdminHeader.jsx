import Logo from "../assets/images/logo.png";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { Form } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    dispatch(reset());
  };

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

        <button onClick={onLogout} className="search-btn">
          <CgLogOff />
          Logout
        </button>
      </div>
    </header>
  );
}
