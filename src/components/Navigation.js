import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

import AuthUserContext from "./AuthUserContext";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationNonAuth = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>
      <Link to={routes.LANDING}> Landing </Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;

const NavigationAuth = ({ userInfo }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>
      <Link to={routes.LANDING}> Landing </Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link to={routes.HOME}>Home</Link>
        </NavLink>
      </NavItem>
      {userInfo.providerData[0].providerId === "facebook.com" ? null : (
        <NavItem>
          <NavLink>
            <Link to={routes.ACCOUNT}>Account</Link>
          </NavLink>
        </NavItem>
      )}
      <NavItem>
        <SignOutButton />
      </NavItem>
    </Nav>
  </Navbar>
);

// const NavigationAuth = ({ userInfo }) => (
//   <ul>
//     {/* {console.log("NavigationAuth", userInfo)} */}
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={routes.HOME}>Home</Link>
//     </li>
//     {/* disabling password changes/resets if user is logged in through facebook */}
//     {userInfo.providerData[0].providerId === "facebook.com" ? null : (
//       <li>
//         <Link to={routes.ACCOUNT}>Account</Link>
//       </li>
//     )}
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

// const NavigationNonAuth = () => (
//   <ul>
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={routes.SIGN_IN}>Sign In</Link>
//     </li>
//   </ul>
// );
