import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink
              to="/"
              exact
              >
                Home
            </NavLink>
            <NavLink
              to="about"
              >
                About
            </NavLink>
            <NavLink
              to="/movies"
              exact
              >
                Movies
            </NavLink>
        </nav>
    )
}

export default NavBar;