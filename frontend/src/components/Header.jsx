import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import logoAirtech from "../img/airtech.png";
import Dashboard from "../img/Dashboard.png";
import { Context } from "../context/UserContext";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // getting the data from the context
  const { loggedIn, rol, setLoggedIn } = useContext(Context);
  // getting the location from the url
  const location = useLocation();
  // conditional rendering for the links
  const showDashboardLink =
  // if the user is logged in and the rol is not Agent and the location is not Dashboard
    loggedIn && rol !== "Agent" && location.pathname !== "/Dashboard";
  const showLogoutLink = loggedIn && location.pathname === "/Dashboard";
  // function for logout the user
  const handleLogout = () => {
    setLoggedIn(false);
  };
// This component renders the header of the app
  return (
    <HeaderContainer>
      {/* conditional rendering for the logo */}
      {location.pathname === "/Dashboard" ? (
        <Logo src={Dashboard} />
      ) : (
        <Logo src={logoAirtech} />
      )}
      {/* conditional rendering for the links */}
      {showDashboardLink && <Link to={"/Dashboard"}>Dashboard</Link>}
      {showLogoutLink && (
        <Link to={"/Login"} onClick={handleLogout}>
          Logout
        </Link>
      )}
    </HeaderContainer>
  );
}
// styles for the header
const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const HeaderContainer = styled.div`
  height: 120px;
  width: 100vw;
  background: linear-gradient(-45deg, #00bfff, #0080ff, #5cdced, #c246ef);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  & h2 {
    color: azure;
  }
  & a {
    position: absolute;
    right: 20px;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }
`;
const Logo = styled.img`
  height: 100px;
  user-select: none;
`;
export { Header };
