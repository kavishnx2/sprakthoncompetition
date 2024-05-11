import React, { useState } from "react";
import Confetti from "react-confetti";
import '../styles/Reward.css';

const Reward = ({ onClose }) => {
  const [isScratched, setIsScratched] = useState(false);
  const imageURL = "https://i.ibb.co/QdW0WtP/Group-17scratchcard.png"; // New image URL

  const handleComplete = () => {
    setIsScratched(true);
  };

  return (
    <div className="popup-container">
      <div className="confetti-container">
        {isScratched && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200} // You can adjust this as needed
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        )}

        <div className="image-container">
          <p className="reward-text">Rs100</p>
        </div>
      </div>
    </div>
  );
};

export default Reward;
