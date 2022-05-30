import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
//import login from '../../../images/login.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    // const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    // const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = async (e) => {
        const {email, password} = loginData;
        // loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
        const res = await fetch("http://localhost:5000/login",{
            method:"POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        if( res.status === 400 || !data ){
            alert('Invalid')
        }else{
            alert('Success')
            navigate("/")
        }
    }

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(location, navigate)
    // }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {/* {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>} */}
                    </form>
                    <p>------------------------</p>
                    {/* <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button> */}
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Login;