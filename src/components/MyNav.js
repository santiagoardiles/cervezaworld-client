/* Navigation bar. */

// Setup.
import React from "react";
import { Link } from "react-router-dom";

// Styles.
import { Navbar, Nav } from "react-bootstrap";
import "../styles/MyNav.css";

function MyNav() {
  return (
    <Navbar className="myNavbar">
      <Nav className="myNav">
        <Link to="/">Home</Link>
        <Link to="/random">Random</Link>
        <Link to="/nueva">New</Link>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
