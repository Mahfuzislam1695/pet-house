
import Button from "@mui/material/Button";
import React, { useEffect } from 'react';
import { useState } from 'react';
import Typography from "@mui/material/Typography";
import { Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about',{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            console.log(data.email);
            setUser(data)

            if(!res.status === 200){
                const error = new Error(res.error)
                throw error;
            }

        } catch (error) {
            console.log(error);
            navigate("/login")
        }
    }

    useEffect(() =>{
        callAboutPage();
        
    },[]);

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
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              {/* {user.email?(
          
<>
</>
      ):
      (
          <>
          <h1>hello</h1>
          </>
      )} */}
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              <Button color="inherit">Home</Button>
            </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/logout"
              >
                <Button color="inherit">Logout</Button>
              </NavLink>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>this is about {user.email}</h1>
      {/* {user.email?(
          
<>
<h1>hi</h1>
</>
      ):
      (
          <>
          <h1>hello</h1>
          </>
      )} */}
        </>
        
    );
};

export default About;