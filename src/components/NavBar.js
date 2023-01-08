import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav id="nav-bar">
            <NavLink
              className="nav-link"
              to="/"
              exact
              >
                Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/movies"
              exact
              >
                Movies
            </NavLink>
            <NavLink
              className="nav-link"
              to="/add-movies"
              >
                Add Movies
              </NavLink>

        </nav>
    )
}

export default NavBar;