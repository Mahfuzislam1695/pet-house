import { Container, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
//import login from '../../../images/login.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [user, setUser] = useState({
        name :"",
        email :"",
        password :"",
        confirmPassword :"",
    });
    const navigate = useNavigate();
    //const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    const handleLoginSubmit = async(e) => {
        // if (loginData.password !== loginData.password2) {
        //     alert('Your password did not match');
        //     return
        // }
    //     registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
        const {name, email, password, confirmPassword} = user;
        const res = await fetch("/register",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,password,confirmPassword
            })
        });
        const data = await res.json();

        if(res.status === 422 || !data){
            alert("invalid RE");
        }else{
            alert("success");
            navigate("/login")
        }
    }
    return (
        
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {/* {!isLoading && <form onSubmit={handleLoginSubmit}> */}
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="confirmPassword"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>
                    {/* {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>} */}
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Register;