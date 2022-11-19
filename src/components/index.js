import React from "react";
import { Nav, NavLink, NavMenu}
    from "./NavBarelements";
// commit
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
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;