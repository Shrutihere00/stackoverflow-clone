import React from "react";
import "./navbar.css";
import logo from "../assets/stack-overflow-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "./Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "../actions/currentUser";
import decode from "jwt-decode";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUserReducer);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-btn">
          <img src={logo} alt="" width="140" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          {" "}
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch className="search-icon" fontSize={"1.3rem"} />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Link
              to={`/Users/${User?.result?._id}`}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <Avatar
                children={User.result.name.charAt(0).toUpperCase()}
                backgroundColor="#009dff"
                px="10px"
                py="10px"
                color="white"
                borderRadius="50%"
              />
            </Link>
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
