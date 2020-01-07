import React from "react";
import styles from "./styles/carousel.css";
import NextButton from "./helper/rightArrowSVG.jsx";
import PrevButton from "./helper/leftArrowSVG.jsx";

function MainCarousel(props) {
  const { index, visible, previousListing, nextListing, photos } = props;
  const url = photos.urls[index];
  const style = {
    backgroundImage: `url(${url})`
  };
  const fade = visible ? styles.fadeIn : styles.fadeOut;

  return (
    <div className={styles.mainGalleryContainer}>
      <button
        onClick={previousListing}
        type="button"
        className={styles.leftArrow}
      >
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

export default MainCarousel;
