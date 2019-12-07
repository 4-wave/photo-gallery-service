import React from 'react';
import styles from './styles/previewCarousel.css';
import PreviewCarouselItem from './previewCarouselItem.jsx';

class PreviewCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { photos, photoClick } = this.props;
    const background = {
      'background-image': `url(https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bedroom14.jpg)`,
    };

    return (
      <div className={styles.container}>
        <div className={styles.carouselPosition}>

          {photos.urls.map((url) => {
            return (
              <PreviewCarouselItem
                photo={url}
                onClick={photoClick}
              />
            );
          })}
        </div>

        <div className={styles.photoNumber}>
            <b>6/12</b>
        </div>

        <div className={styles.photoDescription}>
            Gurjot's House
        </div>

      </div>
    );
  }
}

export default PreviewCarousel;
