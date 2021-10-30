import { useRef } from 'react';
import infoIcon from '../assets/info.svg';

import Popover from 'react-bootstrap/Popover';
import { OverlayTrigger } from 'react-bootstrap';

const Credit = (props) => {
  const { photos, currentIndex } = props;
  const popoverRef = useRef(null);

  const popover = (
    <Popover style={{ color: 'black' }}>
      <Popover.Body ref={popoverRef}>
        <span className="credit-title">Credit: </span>
        {photos[currentIndex].attribution}
        <br />
        <span className="credit-title">License: </span>
        <a
          href={photos[currentIndex].licenseUrl}
          target="_blank"
          rel="noreferrer"
        >
          {photos[currentIndex].license}
        </a>
        <br />
        <span className="credit-title">Source: </span>
        <a href={photos[currentIndex].wikiUrl} target="_blank" rel="noreferrer">
          Wikimedia Commons
        </a>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <button className="infoButton">
        <img src={infoIcon} alt="Open image information" />
      </button>
    </OverlayTrigger>
  );
};

export default Credit;
