import React from 'react';
import { Promise } from 'bluebird';
import styles from './styles/carousel.css';
import NextButton from './helper/rightArrowSVG.jsx';
import PrevButton from './helper/leftArrowSVG.jsx';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { index, visible, previousListing, nextListing, photos } = this.props;
    const url = photos.urls[index].url
    const style = {
      'background-image': `url(${url})`,
    };
    const fade = visible ? styles.fadeIn : styles.fadeOut;

    return (
      <div className={styles.mainGalleryContainer}>

        <button onClick={previousListing} type="button" className={styles.leftArrow}>
          <PrevButton width={24} />
        </button>

        <button onClick={nextListing} type="button" className={styles.rightArrow}>
          <NextButton width={24} />
        </button>

        <div className={`${styles.mainGallery}`}>
          <div className={`${styles.mainPhoto} ${fade}`} style={style} />
        </div>

      </div>
    );
  }
}

export default MainCarousel;
