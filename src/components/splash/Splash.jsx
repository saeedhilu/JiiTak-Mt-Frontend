import React from 'react';
import logo from '../../assets/logo.png'; // Import your image
import './SplashScreen.css'; // Import the CSS for animation

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Loading Logo" className="logo wave-animation" />
    </div>
  );
}

export default SplashScreen;
