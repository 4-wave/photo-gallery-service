import React from 'react';
import styles from './styles/previewCarousel.css';
import PreviewCarouselItem from './previewCarouselItem.jsx';

function PreviewCarousel (props) {
  const { photos, photoClick, selectedIndex } = props;

  let deltaX;
  if (selectedIndex > 2) { // now it does not move until it needs to
    deltaX = (selectedIndex - 2) * 80 * -1;
  } else {
    deltaX = 0;
  }

  const slide = {
    'transition': 'transform .5s',
    'transform': `translateX(${deltaX}px)`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.carouselPosition} style={slide}>
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
        <b>{ `${selectedIndex + 1} /  ${photos.urls.length}`}</b>
      </div>

      <div className={styles.photoDescription}>
        {photos.name}
      </div>

    </div>
  );
}

export default PreviewCarousel;
