import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    const {state, dispatch} = useContext(UserContext);
    // dispatch({type:"USER", payload:true})
    return (
        
        <>

        <Banner></Banner>
        </>
    );
};

export default Home;