import { useState, useEffect } from 'react';
import './App.css';

function fetchPhotos() {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata&format=json&origin=*';
  let dataArray;
  let continueFetch = true;

  console.log('Fetching photos with function');

  return fetch(url).then((response) => response.json());
  /* TODO: Check if returned json has a continue
    .then((data) => {
      if (data.contine.gcmcontinue === true) {
        url = url + "&gcmcontinue=" + data.continue.gcmcontinue;
      } else {
        continueFetch = false;
      }
    }
  */

  /*
    TODO:
    Query recursively for more responses, until continue is no longer present
    if data.continue === true (meaning there is a continue property present, and there are more responses to fetch)
      grab data.continue.gcmcontinue
        add gcmcontinue to end of url with "&gcmcontinue=(gcmcontinue string)"
      concat new array (array1.concat(array2)) from next fetch with old array, and return full array
  */

  /*
  ORIGINAL FETCH:
  if (continueFetch) {
    // finish last small step
    // end recursion
  } else {
    // call fetchPhotos again
  }
  */

  /*
  returnfetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Change object of photos into an array
      dataArray = Object.values(data.query.pages);
      //photoSetter(dataArray);
      console.log('Data array in fetch: ', dataArray);
    })
    .catch((err) => console.error('Error:', err));

  console.log('DataArray: ' + dataArray);
  return dataArray;

  */
}

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos() //get returned promise from fetch
      .then((data) => {
        let dataArray = Object.values(data.query.pages); // Change object of photos into an array
        setPhotos(dataArray); // Save photos' info in state
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  console.log('Photos state outside effect: ', photos);

  return <div className="App"></div>;
}

export default App;
