import { useState, useEffect } from 'react';
import Photo from './components/Photo';
import './App.css';
import menuIcon from './assets/menu-icon.svg';
import rightArrow from './assets/right-arrow.svg';
import leftArrow from './assets/left-arrow.svg';
import playButton from './assets/play-icon.svg';
import pauseButton from './assets/pause-icon.svg';

/* TODO: (Next Up)

  Arrow Keys
  Timer
  Nav Side Bar
  Loading Page - Styling
  Buttons - Color

  Keyboard handler for all key presses that correspond to a button
  Add to the main app component
    Space = pause/unpause
    Right arrow = next image
    Left arrow = next image

    Click anywhere on app to move to next photo

  Styling
    Optional: Image fade in and out
*/

/* TODO: (fetchPhotos)
  Fetch any subcategories and images held in subcategories
  Way to fetch images from multiple categories (if using sub or related/predetermined categories)

  Make sure errors are caught for each call of fetch (and not just first function call in useEffect)?

  Handle errors and re-try when there is no load (or it times out)
    E.g. random "Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource."

    When loading certain images: "Image corrupt or truncated."

  Loading waiting page
    Have number of photos being fetched (each batch of 500) counted
*/

/* TODO: (cacheImage)
  Pre-load first few images ahead of time
    Don't show image until first is loaded
    Preload first 3-5 first round?

  Skip cacheImage() preload if the index has already been skipped
*/

function fetchPhotos(url, setPhotos, setFetchIsFinished) {
  return fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      //Query recursively to fetch all images (until continue property is no longer present)
      if ('continue' in data) {
        // Combine image data & save in state
        let newData = Object.values(data.query.pages);
        setPhotos((prevState) => prevState.concat(newData));

        // Call fetch again with new url
        url = url + '&gcmcontinue=' + data.continue.gcmcontinue;
        fetchPhotos(url, setPhotos, setFetchIsFinished);
      } else {
        //End recursion
        let newData = Object.values(data.query.pages);

        // Combine image data, shuffle, & save in state
        setPhotos((prevState) => shufflePhotos(prevState.concat(newData)));
        setFetchIsFinished(true);
      }
    });
}

function shufflePhotos(arr) {
  let newArr = arr;

  // Use Durstenfeld algorithm to shuffle
  for (let i = newArr.length - 1; i > 0; i--) {
    var ranIndex = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[ranIndex]] = [newArr[ranIndex], newArr[i]];
  }

  return newArr;
}

// Placeholder Header
function Header() {
  return (
    <header>
      <button className="menuButton">
        <img src={menuIcon} alt="Open menu" />
      </button>
    </header>
  );
}

// Placeholder Timer
function Timer() {
  return <div className="Timer">15:00</div>;
}

// Placeholder Arrows
function Footer({ handleNextPhoto }) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  return (
    <footer>
      <Timer />
      <div className="button-container">
        <button className="arrowButton">
          <img src={leftArrow} alt="Last image" />
        </button>
        <button className="playButton">
          {timerIsRunning ? (
            <img src={pauseButton} alt="Pause timer" />
          ) : (
            <img src={playButton} alt="Start timer" />
          )}
        </button>
        <button className="arrowButton">
          <img src={rightArrow} alt="Next image" onClick={handleNextPhoto} />
        </button>
      </div>
    </footer>
  );
}

// MAIN COMPONENT
function App() {
  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false); // TODO: Find way to replace this so useEffect only runs once (unless this runs extra from dev mode)
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [firstIsLoaded, setFirstIsLoaded] = useState(false);

  useEffect(() => {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=max&iiprop=url|extmetadata|size&format=json&origin=*';

    if (!fetchIsFinished) {
      fetchPhotos(url, setPhotos, setFetchIsFinished) //get returned promise from fetch
        .catch((err) => console.error('Error:', err));
    }
  }, []);

  // Pre-load next image into the cache
  useEffect(() => {
    if (fetchIsFinished) {
      cacheImage(currentIndex);
    }
  }, [fetchIsFinished, currentIndex]);

  const cacheImage = (currI) => {
    console.log('loading image ', currentIndex + 1);

    const nextImg = new Image();
    nextImg.src = photos[currI + 1].imageinfo[0].url;
  };

  const handleNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);

    console.log('Current index: ', currentIndex);
  };

  // Show loading text if fetch is not finished
  if (photos === undefined || photos.length == 0 || !fetchIsFinished) {
    return <div className="App">Fetching images...</div>;
  }

  // If fetch is finished, return full app
  return (
    <div className="App">
      {console.log(photos[currentIndex])}
      <Header />
      <Photo currentPhoto={photos[currentIndex]} />
      <Footer handleNextPhoto={handleNextPhoto} />
    </div>
  );
}

export default App;
