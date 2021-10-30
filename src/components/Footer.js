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
              alt="Left arrow"
              aria-label="Go to previous image"
              onClick={() => handleNextPhoto('Back')}
            />
          </button>
          <button className="playButton">
            {runTimer ? (
              <img
                src={pauseButton}
                alt="Pause"
                aria-label="Pause timer"
                onClick={handleToggleTimer}
              />
            ) : (
              <img
                src={playButton}
                alt="Play"
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
              onClick={() => handleNextPhoto('Next')}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
