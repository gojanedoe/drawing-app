import { useState } from 'react';

import Credit from './Credit';
import Timer from './Timer';

import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import playButton from '../assets/play-icon.svg';
import pauseButton from '../assets/pause-icon.svg';

const Footer = (props) => {
  const { handleNextPhoto, photos, currentIndex } = props;
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  const initialTime = 15;
  const [timerSeconds, setTimerSeconds] = useState(initialTime); // countdown time in seconds

  const handleToggleTimer = () => {
    setTimerIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTimer = () => {
    setTimerSeconds(initialTime);
  };

  return (
    <footer>
      <Credit photos={photos} currentIndex={currentIndex}></Credit>
      <div className="button-container vertical">
        <Timer
          timerIsRunning={timerIsRunning}
          setTimerIsRunning={setTimerIsRunning}
          timerSeconds={timerSeconds}
          setTimerSeconds={setTimerSeconds}
          initialTime={initialTime}
          handleNextPhoto={handleNextPhoto}
          resetTimer={resetTimer}
        />
        <div className="button-container">
          <button className="arrowButton">
            <img
              src={leftArrow}
              alt="Left arrow"
              aria-label="Go to previous image"
              onClick={() => {
                handleNextPhoto('Back');
                resetTimer();
              }}
            />
          </button>
          <button className="playButton">
            {timerIsRunning ? (
              <img
                src={pauseButton}
                alt="Pause icon"
                aria-label="Pause timer"
                onClick={handleToggleTimer}
              />
            ) : (
              <img
                src={playButton}
                alt="Play icon"
                aria-label="Start timer"
                onClick={handleToggleTimer}
              />
            )}
          </button>
          <button className="arrowButton">
            <img
              src={rightArrow}
              alt="Right arrow"
              aria-label="Go to next image"
              onClick={() => {
                handleNextPhoto('Next');
                resetTimer();
              }}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
