/* TODO:
  Fix image alts:
    delete html markup from text
    if imagedescription doesn't exist, set to standard or alternative text

    Alt: use captions from differnet API at https://commons.wikimedia.org/wiki/Commons:File_captions#How_can_I_query_the_captions_using_the_API?
*/

function Photo(props) {
  const { currentPhoto } = props;
  return (
    <div className="photo-container">
      <img
        // src={currentPhoto.imageinfo[0].url}
        src={currentPhoto.imageUrl}
        className="photo"
        //style="height: 100vh;"
        //height="100vh"

        //{photos[currentImg].imageinfo[0].extmetadata.width > photos[currentImg].imageinfo[0].extmetadata.height ? "width"="100vw" : "height"="100vh"}
        // alt={
        //   photos[currentImg].imageinfo[0].extmetadata.ImageDescription.value
        // }
      />
    </div>
  );
}

export default Photo;
