import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false); // TODO: Find way to replace this so useEffect only runs once

  useEffect(() => {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=500&iiprop=url|extmetadata&format=json&origin=*';

    if (!fetchIsFinished) {
      fetchPhotos(url, setPhotos, setFetchIsFinished) //get returned promise from fetch
        .catch((err) => console.error('Error:', err));
    }
  }, []);

  // Show loading text if no photos saved yet
  if (photos === undefined || photos.length == 0) {
    return <div className="App">Fetching images...</div>;
  }

  return <div className="App"></div>;
}

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
        // Add new data to array of data
        // Combine earlier data with new array of data & save in state
        let newData = Object.values(data.query.pages);
        setPhotos((prevState) => prevState.concat(newData)); // combine earlier data with new array of data & save in state
        // Call fetch again with new url
        url = url + '&gcmcontinue=' + data.continue.gcmcontinue;
        fetchPhotos(url, setPhotos, setFetchIsFinished);
      } else {
        //End recursion and add last values to sstate
        console.log('No more continues');
        let newData = Object.values(data.query.pages);
        setPhotos((prevState) => prevState.concat(newData)); // combine earlier data with new array of data & save in state
        setFetchIsFinished(true);
      }
    });
}

export default App;
