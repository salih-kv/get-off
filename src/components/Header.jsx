import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Header({ displayCoupons, setDisplayCoupons }) {
  const { pathname } = useLocation();

  return (
    <Navbar style={{ background: "#36394c" }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setDisplayCoupons(false)}>
          Home
        </Navbar.Brand>
        {displayCoupons && (
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/offer1"
              className={pathname === "/offer1" ? "active" : ""}
            >
              Coupon 1
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/offer2"
              className={pathname === "/offer2" ? "active" : ""}
            >
              Coupon 2
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/offer3"
              className={pathname === "/offer3" ? "active" : ""}
            >
              Coupon 3
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
