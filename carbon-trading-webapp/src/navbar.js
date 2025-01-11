import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, LogOut } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
      <img 
          src="/dbslogo.png"  
          alt="Logo" 
          className="navbar-logo" 
          style={{ width: '80px', height: 'auto' }}  // Adjust inline style
        />
        <button 
          className={`nav-button ${location.pathname === '/home' ? 'active' : ''}`}
          onClick={() => navigate('/home')}
        >
          <Home className="nav-icon" />
          <span>Home</span>
        </button>
        
        <button 
          className={`nav-button ${location.pathname === '/request' ? 'active' : ''}`}
          onClick={() => navigate('/request')}
        >
          <FileText className="nav-icon" />
          <span>Request</span>
        </button>
      </div>
      
      <button className="logout-button" onClick={handleLogout}>
        <LogOut className="nav-icon" />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;