import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Navigation = () => {
  const {state, dispatch} = useContext(UserContext)
  const RenderMenu = () =>{
    if (state) {
      return (
        <>
        <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <Button color="inherit">About</Button>
            </NavLink>
            {/* <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Logout"
            >
              <Button color="inherit">Logout</Button>
            </NavLink> */}
        </>
      )
    }else{
      return(
        <>
        <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            {/* <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink> */}
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <Button color="inherit">About</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Logout"
            >
              <Button color="inherit">Logout</Button>
            </NavLink>
        </>
      )
    }
  }

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
          <Typography variant="h6">Doctors Portal</Typography>
          {/* <Navbar.Brand color="inherit" href="#home">Doctor Portal</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <RenderMenu></RenderMenu>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
