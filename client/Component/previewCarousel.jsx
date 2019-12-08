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
    const { photos, photoClick, selectedIndex } = this.props;
    const deltaX = selectedIndex * (100 / photos.urls.length) * -1;
    console.log(deltaX); // FORMULA NOT RIGHT
    const slide = {
      'transition': 'transform 1s',
      'transform': `translateX(${deltaX}%)`,
    };

    return (
      <div className={styles.container}>
        <div className={styles.carouselPosition} style={slide} id='SAM'>

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
