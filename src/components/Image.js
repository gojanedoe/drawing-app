/* TODO:
  On click, go to next image
    Add click handler

  Fix image alts:
    delete html markup from text
    if imagedescription doesn't exist, set to standard or alternative text
*/

function Image(props) {
  const { currentPhoto } = props;
  return (
    <div className="photo-container">
      <img
        src={currentPhoto.imageinfo[0].url}
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

export default Image;
