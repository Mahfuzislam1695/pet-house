import React, { createContext } from 'react';
import useJwt from './../../hooks/useJwt';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useJwt();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;