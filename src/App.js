import { useState, useEffect } from 'react';
import Photo from './components/Photo';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import rightArrow from './assets/right-arrow.svg';
import leftArrow from './assets/left-arrow.svg';
import playButton from './assets/play-icon.svg';
import pauseButton from './assets/pause-icon.svg';

function fetchPhotos(url, setPhotos, setFetchIsFinished) {
  return fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);

      // Query recursively to fetch all images (until continue property is no longer present)
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

// MAIN COMPONENT
function App() {
  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=max&iiprop=url|extmetadata|size&format=json&origin=*';

    if (!fetchIsFinished) {
      fetchPhotos(url, setPhotos, setFetchIsFinished) //get returned promise from fetch
        .catch((err) => console.error('Fetch error:', err));
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

  // Respond to back and forward button clicks for photo
  const handleNextPhoto = (next) => {
    switch (next) {
      case 'Next':
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        console.log('going to next photo');
        break;
      case 'Back':
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
        console.log('going to last photo');
        break;
    }
    console.log('Last index: ', currentIndex);
  };

  // Show loading text if fetch is not finished
  if (photos === undefined || photos.length == 0 || !fetchIsFinished) {
    return (
      <div className="App loading-container">
        <p className="loading-text">Fetching images</p>
      </div>
    );
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
