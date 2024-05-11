// TextTransition.js
import React, { useState, useEffect } from 'react';
import ReactTextTransition from 'react-text-transition';
import { questions, answers } from '../components/Constants'; 
import '../styles/texttransition.css';

function TextTransition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuestion, setIsQuestion] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isQuestion) {
        setIsQuestion(false);
        setTimeout(() => {
          setIsQuestion(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
        }, 8000); // Wait 8 seconds after showing the answer
      } else {
        setIsQuestion(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
      }
    }, 11000); // Wait 11 seconds for each full question-answer pair

    return () => {
      clearInterval(interval);
    };
  }, [isQuestion]);

  return (
    <React.Fragment>
      <section>
        <section>
          <ReactTextTransition springConfig={{ tension: 300, friction: 10 }}>
            {isQuestion ? questions[currentIndex] : answers[currentIndex]}
          </ReactTextTransition>
        </section>
      </section>
    </React.Fragment>
  );
}

export default TextTransition;
