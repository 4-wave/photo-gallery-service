import React from 'react';
import styles from './styles/previewCarousel.css';
import PreviewCarouselItem from './previewCarouselItem.jsx';

class PreviewCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // console.log('THE PARENT OF CAROSUEL RAN PREVIEW');
  }


  render() {
    // console.log('middle child ran for preview');
    const { photos, photoClick, selectedIndex } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.carouselPosition}>

          {photos.urls.map((url, id) => {
            return (
              <PreviewCarouselItem
                photo={url}
                onClick={photoClick}
                id={id}
                selectedIndex={selectedIndex}
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
