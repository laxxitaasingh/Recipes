import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './header.css';

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler functions to navigate on button click
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="heading">
        <h1>Header</h1>
        <div className="buttons">
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '20px', padding: '10px 20px' }}
            onClick={handleSignUpClick} // Call navigate function
          >
            SignUp
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '20px', padding: '10px 20px' }}
            onClick={handleLoginClick} // Call navigate function
          >
            Login
          </Button>
        </div>
      </div>

    </>
  );
}

export default Header;
