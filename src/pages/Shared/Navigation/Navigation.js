import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar
        bg="primary"
        className="text-white"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Typography variant="h6">PET HOUSE</Typography>
          {/* <Navbar.Brand color="inherit" href="#home">Doctor Portal</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <Button color="inherit">About</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/order"
            >
              <Button color="inherit">Order</Button>
            </NavLink>

            {user.email ? (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/logout"
              >
                <Button color="inherit">Logout</Button>
              </NavLink>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/Login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
