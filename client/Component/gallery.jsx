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
    const galleryPhotoArr = this.props.info.urls.slice(0, 5);

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
