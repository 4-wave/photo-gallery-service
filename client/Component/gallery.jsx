import React from 'react';
import styles from './styles/gallery.css';
import GalleryPhoto from './galleryPhoto.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // want to only add the first five in the gallery photo
    let galleryPhotoArr = this.props.info.urls.slice(0, 5);


    // currently DB only has a minimum of 5 photos
    // if length is less than 5 then only render 3 imgs
    if (galleryPhotoArr.length < 5 && galleryPhotoArr.length > 2) {
      galleryPhotoArr = galleryPhotoArr.slice(0, 3);
    }

    // if less than 3, then only render 1 image
    if (galleryPhotoArr.length < 3 && galleryPhotoArr.length > 0) {
      galleryPhotoArr = galleryPhotoArr.slice(0, 1);
    }

    return (
      <div className={styles.container}>
        {galleryPhotoArr.map((item, id) => {
          return <GalleryPhoto photo={item} type={id + 1} />;
        })}
      </div>
    );
  }
}

export default Gallery;
