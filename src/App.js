import { useReducer } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Logout from './pages/Login/Logout/Logout';
import Register from './pages/Login/Register/Register';
import Navigation from './pages/Shared/Navigation/Navigation';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
  
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
        <Navigation></Navigation>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter> 
        </UserContext.Provider>
      </>
      
  );
}

export default App;
