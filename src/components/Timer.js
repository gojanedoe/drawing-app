import { useEffect } from 'react';

const Timer = (props) => {
  const {
    timerIsRunning,
    timerSeconds,
    setTimerSeconds,
    handleNextPhoto,
    resetTimer
  } = props;

  // Referenced from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
  useEffect(() => {
    let interval = null;

    if (timerIsRunning && timerSeconds !== 0) {
      interval = setInterval(() => {
        setTimerSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (timerIsRunning && timerSeconds <= 0) {
      handleNextPhoto('Next');
      resetTimer();
    } else if (!timerIsRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }

    // Clear interval if the component is unmounted
    return () => clearInterval(interval);
  }, [timerIsRunning, timerSeconds]);

  return <div className="Timer">:{timerSeconds}</div>;
};

export default Timer;
