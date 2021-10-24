import { useState } from 'react';

import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import playButton from '../assets/play-icon.svg';
import pauseButton from '../assets/pause-icon.svg';
import infoIcon from '../assets/info.svg';

import Timer from './Timer';

const Footer = ({ handleNextPhoto }) => {
  const [runTimer, setRunTimer] = useState(false);

  const handleToggleTimer = () => {
    setRunTimer((prevIsRunning) => !prevIsRunning);
  };

  return (
    <footer>
      <button className="infoButton">
        <img src={infoIcon} alt="Open image information" />
      </button>
      <div className="button-container vertical">
        <Timer runTimer={runTimer} />
        <div className="button-container">
          <button className="arrowButton">
            <img
              src={leftArrow}
              alt="Last image"
              onClick={() => handleNextPhoto('Back')}
            />
          </button>
          <button className="playButton">
            {runTimer ? (
              <img
                src={pauseButton}
                alt="Pause timer"
                onClick={handleToggleTimer}
              />
            ) : (
              <img
                src={playButton}
                alt="Start timer"
                onClick={handleToggleTimer}
              />
            )}
          </button>
          <button className="arrowButton">
            <img
              src={rightArrow}
              alt="Next image"
              onClick={() => handleNextPhoto('Next')}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
