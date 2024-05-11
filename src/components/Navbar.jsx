import React, { useState } from 'react';
import '../styles/texttransition.css';
import TextTransition from '../components/TextTransition';
import { questions, answers } from '../components/Constants';
import '../styles/navbar.css';
import Reward from '../components/Reward'; // Import the Reward component

function Navbar() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  function handleLogoClick() {
    // Increment the click count
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 3) {
      setPopupVisibility(true);
    }
  }

  function handleCloseClick() {
    setPopupVisibility(false);
    setClickCount(0);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://i.ibb.co/Tkk0nJP/SD-logo-baseline-RGB.png" alt="Logo" />
      </div>
      
      <div className="sdhublogo" onClick={handleLogoClick}>
        <img src="https://i.ibb.co/4Fq3FrW/Group-13.png" alt="SdLogo" />
      </div>

      <div className={`popup ${isPopupVisible ? 'visible' : ''}`}>
        <div className="popup-content">
          <button className="close-button" onClick={handleCloseClick}>X</button>
          {isPopupVisible && <Reward onClose={handleCloseClick} />} {/* Pass the onClose function */}
        </div>
      </div>

      <div className="text-transition-container">
        <TextTransition questions={questions} answers={answers} />
      </div>

      <div className="logoutlogo">
        <img src="https://i.ibb.co/KxcyFxD/image-9.png" alt="LogoutLogo" />
      </div>
    </nav>
  );
}

export default Navbar;
