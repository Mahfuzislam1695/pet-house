
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Logout from './pages/Login/Logout/Logout';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import Order from './pages/Order/Order';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  
  return (
  
    <>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
            <Route path="/order" element={
              <PrivateRoute><Order /></PrivateRoute>
            }>              
            </Route>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
          </AuthProvider> 
      </>
      
  );
}

export default App;
