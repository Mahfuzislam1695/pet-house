import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect (() => {
            fetch('/logout',{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials:"include"
            }).then((res) =>{
                navigate("/");
                if(res.status !== 200){
                    const error = new Error(res.error)
                    throw error;
                }
            }).catch((err) =>{
                console.log(err);
            })
    })

    return (
        <div>
            <h1>hh</h1>
        </div>
    );
};

export default Logout;