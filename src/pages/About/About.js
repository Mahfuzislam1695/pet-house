import { Button, Typography  } from '@mui/material';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Container, Navbar, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Navigation from '../Shared/Navigation/Navigation';

const About = () => {
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState();

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
    // dispatch({type:"USER", payload:true})

    return (
        <>
      <h1>this is about</h1>
        </>
        
    );
};

export default About;