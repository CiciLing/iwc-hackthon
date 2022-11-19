import React from "react";
import { Nav, NavLink, NavMenu}
    from "./NavBarelements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/chat" activeStyle>
            Forum
          </NavLink>
          <NavLink to="/rights" activeStyle>
            Rights
          </NavLink>
          <NavLink to="/StateInformationPage" activeStyle>
            State Information
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;