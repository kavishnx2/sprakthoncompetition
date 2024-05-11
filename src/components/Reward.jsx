import React, { useState } from "react";
import ScratchCard from "react-scratchcard-v2";
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
          <ScratchCard
            width={300}
            height={300}
            image={imageURL}
            finishPercent={80}
            onComplete={handleComplete}
          />
          <p className="reward-text">Rs100</p>
        </div>
      </div>
    </div>
  );
};

export default Reward;
