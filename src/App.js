import { useState, useEffect } from 'react';
import Image from './components/Image';
import './App.css';

function fetchPhotos(url, setPhotos, setFetchIsFinished) {
  // Test for no continue:  'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Documents signed by Boris Yeltsin&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata&format=json&origin=*';

  // TODO:
  // Fetch any subcategories and images held in subcategories
  // Way to fetch images from multiple categories (if using sub or related/predetermined categories)

  // TODO:
  // Make sure errors are caught for each call of fetch (and not just first function call in useEffect)?

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

// MAIN COMPONENT
function App() {
  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false); // TODO: Find way to replace this so useEffect only runs once (unless this runs extra from dev mode)
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=max&iiprop=url|extmetadata|size&format=json&origin=*';

    if (!fetchIsFinished) {
      fetchPhotos(url, setPhotos, setFetchIsFinished) //get returned promise from fetch
        .catch((err) => console.error('Error:', err));
    }
  }, []);

  /* TODO:
    Pre-load firsts few images ahead of time
      Preload first 3-5 first round

    Skip cacheImage() preload if the index has already been skipped
  */

  // Pre-load next image into the cache
  useEffect(() => {
    if (fetchIsFinished) {
      cacheImage(currentIndex);
    }
  }, [currentIndex]);

  const cacheImage = async (currI) => {
    console.log('loading next image');
    //return new Promise(function (resolve, reject) {
    // next photo
    const nextImg = new Image();
    nextImg.src = photos[currI + 1].imageinfo[0].url;
    //nextImg.onload = resolve(console.log('loaded image:', currI + 1));
    //nextImg.onerror = reject();
    //});
  };

  // Load all images
  // useEffect(() => {
  //   if (fetchIsFinished) {
  //     cacheImage(currentIndex);
  //   }
  // }, []);

  // const cacheImage = async (currI) => {
  //   const promises = await photos.map((photo) => {
  //     return new Promise(function (resolve, reject) {
  //       console.log('loading next image');

  //       const nextImg = new Image();
  //       nextImg.src = photo.imageinfo[0].url;
  //       nextImg.onload = resolve();
  //       nextImg.onerror = reject();
  //     });
  //   });
  // };

  const handleNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    console.log('Current index: ', currentIndex);
  };

  // Show loading text if no photos saved yet or fetch is not finished
  if (photos === undefined || photos.length == 0 || !fetchIsFinished) {
    return <div className="App">Fetching images...</div>;
  }

  return (
    <div className="App" onClick={handleNextPhoto}>
      {console.log(photos[currentIndex])}
      <Image currentPhoto={photos[currentIndex]} />
    </div>
  );
}

export default App;
