import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (

        <>
             <Navbar bg="primary" className='text-white' variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Typography variant="h6">
                        Doctors Portal
                   </Typography>
                    {/* <Navbar.Brand color="inherit" href="#home">Doctor Portal</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                   <Button color="inherit">Login</Button>
                               </NavLink>    
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                                   <Button color="inherit">About</Button>
                               </NavLink>    
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/register">
                                   <Button color="inherit">Register</Button>
                               </NavLink>    
                        
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;