const Photo = (props) => {
  const { currentPhoto } = props;
  return (
    <div className="photo-container">
      <img
        src={currentPhoto.imageUrl}
        className="photo"
        alt={currentPhoto.imageDesc}
      />
    </div>
  );
};

export default Photo;
