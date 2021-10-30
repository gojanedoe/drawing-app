import { useState } from 'react';

import Credit from './Credit';
import Timer from './Timer';

import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import playButton from '../assets/play-icon.svg';
import pauseButton from '../assets/pause-icon.svg';

const Footer = (props) => {
  const { handleNextPhoto, photos, currentIndex } = props;
  const [runTimer, setRunTimer] = useState(false);

  const handleToggleTimer = () => {
    setRunTimer((prevIsRunning) => !prevIsRunning);
  };

  return (
    <footer>
      <Credit photos={photos} currentIndex={currentIndex}></Credit>
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
