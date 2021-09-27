import { useState, useEffect } from 'react';
import './App.css';

function fetchPhotos(url, setPhotos, setFetchIsFinished) {
  // Test for no continue:  'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Documents signed by Boris Yeltsin&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata&format=json&origin=*';

  // TODO:
  // Fetch any subcategories and images held in subcategories

  // TODO:
  // Make sure errors are caught for each call of fetch (and not just first function call in useEffect)?

  //Query recursively to fetch all images (until continue property is no longer present)
  return fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      if ('continue' in data) {
        // Combine image data & save in state
        let newData = Object.values(data.query.pages);
        setPhotos((prevState) => prevState.concat(newData));

        // Call fetch again with new url
        url = url + '&gcmcontinue=' + data.continue.gcmcontinue;
        fetchPhotos(url, setPhotos, setFetchIsFinished);
      } else {
        //End recursion
        console.log('No more continues');
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

function App() {
  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false); // TODO: Find way to replace this so useEffect only runs once
  const [currentImg, setCurrentImg] = useState({
    imageinfo: {},
    indexNum: null
  });

  useEffect(() => {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=max&iiprop=url|extmetadata&format=json&origin=*';

    if (!fetchIsFinished) {
      fetchPhotos(url, setPhotos, setFetchIsFinished) //get returned promise from fetch
        .catch((err) => console.error('Error:', err));
    }
  }, []);

  // Show image
  // useEffect(() => {
  //console.log(photos[0].imageinfo[0].url);

  // }, [fetchIsFinished]);

  // Show loading text if no photos saved yet
  if (photos === undefined || photos.length == 0) {
    return <div className="App">Fetching images...</div>;
  }

  return (
    <div className="App">
      <img />
    </div>
  );
}

export default App;
