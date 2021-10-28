import { useRef } from 'react';
// import Button from 'react-bootstrap/Button';
import infoIcon from '../assets/info.svg';

import Popover from 'react-bootstrap/Popover';
import { OverlayTrigger } from 'react-bootstrap';

const Credit = ({ photos, currentIndex }) => {
  const popoverRef = useRef(null);

  // Not showing anything
  // console.log(popoverRef);

  const popover = (
    <Popover style={{ color: 'black' }}>
      {/* <Popover.Header>Test Button</Popover.Header> */}
      <Popover.Body ref={popoverRef}>
        <span className="credit-title">Attribution: </span>
        {photos[currentIndex].attribution}
      </Popover.Body>
    </Popover>
  );

  const clickHandler = () => {
    console.log('Im working');
    console.log(photos[currentIndex].attribution);

    // popoverRef.current.innerHTML = photos[currentIndex].attribution;
  };

  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={popover}
      onClick={clickHandler}
    >
      <button className="infoButton">
        <img src={infoIcon} alt="Open image information" />
      </button>
    </OverlayTrigger>
  );
};

export default Credit;
