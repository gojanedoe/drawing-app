import { useState, useEffect } from 'react';
import Photo from './Photo';
import Footer from './Footer';

// Fetch photos once in single batch
function fetchPhotos(url, setPhotos, setFetchIsFinished) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      // Clean up json data before saving it to state
      let newData = Object.values(data.query.pages).map((photo) => {
        let imageInfo = photo.imageinfo[0];
        let imageMetadata = imageInfo.extmetadata;

        // Remove any HTML tags from image description
        let cleanImageDesc = null;
        if (imageMetadata.hasOwnProperty('ImageDescription')) {
          let origImageDesc = imageMetadata.ImageDescription.value;
          cleanImageDesc = origImageDesc.replace(/<[^>]*>?/gm, '');
        }

        // Set photo credit name for attribution
        let attribution = 'Not available';
        if (imageMetadata.hasOwnProperty('Author')) {
          // console.log('Has Author prop');
          attribution = imageMetadata.Author.value;
        } else if (imageMetadata.hasOwnProperty('Artist')) {
          // console.log('Has Artist prop');
          attribution = imageMetadata.Artist.value;
        } else if (imageMetadata.hasOwnProperty('Attribution')) {
          // console.log('Has Attribution prop');
          attribution = imageMetadata.Attribution.value;
        }
        // Remove any HTML tags
        attribution = attribution.replace(/<[^>]*>?/gm, '');

        // Set credit name + remove any HTML tags
        let credit = null;
        if (imageMetadata.hasOwnProperty('Credit')) {
          credit = imageMetadata.Credit.value;
          credit = credit.replace(/<[^>]*>?/gm, '');
        }

        // Set if copyrighted or not
        let copyrighted = null;
        if (
          imageMetadata.hasOwnProperty('Copyrighted') &&
          imageMetadata.Copyrighted.value === 'True'
        ) {
          copyrighted = true;
        } else {
          // console.log(
          //   "No 'True' in Copyrighted, instead was given: ",
          //   imageMetadata.Copyrighted.value
          // );
          copyrighted = false;
        }

        // Set License Url
        if (imageMetadata.hasOwnProperty('LicenseUrl')) {
        } else {
          // console.log(
          //   'No license Url, instead, here is whole image info \n',
          //   imageInfo
          // );
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
const PhotoGenerator = (props) => {
  const { selectedCategory } = props;

  const [photos, setPhotos] = useState([]);
  const [fetchIsFinished, setFetchIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let url =
      'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*';

    // If category is selected, change url from default
    if (selectedCategory !== '') {
      url =
        'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:' +
        selectedCategory +
        '&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*';
    }

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
        break;
      case 'Back':
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
        break;
    }
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
      {/* {console.log(photos[currentIndex])} */}
      <Photo currentPhoto={photos[currentIndex]} />
      <Footer
        handleNextPhoto={handleNextPhoto}
        photos={photos}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default PhotoGenerator;
