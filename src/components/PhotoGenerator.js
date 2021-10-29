import { useState, useEffect } from 'react';
import Photo from './components/Photo';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

// function recursiveFetchPhotos(url, setPhotos, setFetchIsFinished) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);

//       // Query recursively to fetch all images (until continue property is no longer present)
//       if ('continue' in data) {
//         // Combine image data & save in state
//         // let newData = Object.values(data.query.pages);
//         let newData = Object.values(data.query.pages);
//         setPhotos((prevState) => prevState.concat(newData));

//         // Call fetch again with new url
//         url = url + '&gcmcontinue=' + data.continue.gcmcontinue;
//         fetchPhotos(url, setPhotos, setFetchIsFinished);
//       } else {
//         // End recursion
//         // let newData = Object.values(data.query.pages);
//         let newData = Object.values(data.query.pages);

//         // Combine image data, shuffle, & save in state
//         setPhotos((prevState) => shufflePhotos(prevState.concat(newData)));
//         setFetchIsFinished(true);
//       }
//     });
// }

// Fetch photos once in single batch
function fetchPhotos(url, setPhotos, setFetchIsFinished) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Clean up json data before saving it to state
      let newData = Object.values(data.query.pages).map((photo) => {
        let imageInfo = photo.imageinfo[0];
        let imageMetadata = imageInfo.extmetadata;

        // Remove any HTML tags from image description
        let origImageDesc = imageMetadata.ImageDescription.value;
        let cleanImageDesc = origImageDesc.replace(/<[^>]*>?/gm, '');

        // Set photo credit name for attribution
        let attribution = 'Not available';
        if (imageMetadata.hasOwnProperty('Author')) {
          console.log('Has Author prop');
          attribution = imageMetadata.Author.value;
        } else if (imageMetadata.hasOwnProperty('Artist')) {
          console.log('Has Artist prop');
          attribution = imageMetadata.Artist.value;
        } else if (imageMetadata.hasOwnProperty('Attribution')) {
          console.log('Has Attribution prop');
          attribution = imageMetadata.Attribution.value;
        }

        // Set credit name
        let credit = null;
        if (imageMetadata.hasOwnProperty('Credit')) {
          credit = imageMetadata.Credit.value;
        }

        // Set if copyrighted or not
        let copyrighted = null;
        if (
          imageMetadata.hasOwnProperty('Copyrighted') &&
          imageMetadata.Copyrighted.value === 'True'
        ) {
          copyrighted = true;
        } else {
          console.log(
            "No 'True' in Copyrighted, instead was given: ",
            imageMetadata.Copyrighted.value
          );
          copyrighted = false;
        }

        // Set License Url
        let licenseUrl = null;
        if (imageMetadata.hasOwnProperty('LicenseUrl')) {
        } else {
          console.log(
            'No license Url, instead, here is whole image info \n',
            imageInfo
          );
        }

        return {
          imageUrl: imageInfo.url,
          imageDesc: cleanImageDesc,
          wikiUrl: imageInfo.descriptionshorturl,
          license: imageMetadata.LicenseShortName.value,
          licenseUrl: imageMetadata.hasOwnProperty('LicenseUrl')
            ? imageMetadata.LicenseUrl.value
            : null,
          attribution: attribution,
          credit: credit,
          copyrighted: copyrighted,
          allMetadata: imageMetadata
        };
      });

      // Combine image data, shuffle, & save in state
      setPhotos((prevState) => shufflePhotos(prevState.concat(newData)));
      setFetchIsFinished(true);
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
function PhotoGenerator() {
  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // let url =
    //   'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=max&iiprop=url|extmetadata|size&format=json&origin=*';
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*';

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

    // Cache first image if on last image
    if (currI >= photos.length - 1) {
      nextImg.src = photos[0].imageUrl;
    }
    // Otherwise, go to next image as usual
    else {
      nextImg.src = photos[currI + 1].imageUrl;
    }
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
  if (photos === undefined || photos.length === 0 || !fetchIsFinished) {
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
      <Footer
        handleNextPhoto={handleNextPhoto}
        photos={photos}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default PhotoGenerator;
