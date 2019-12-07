import React from 'react';
import styles from './styles/previewCarousel.css';

class PreviewCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const background = {
      'background-image': `url(https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bedroom14.jpg)`,
    };

    return (
      <div className={styles.container}>
        <div className={styles.carouselPosition}>
            {/* Photos go Here. Map over the photos Here */}
            <div>
              <button type="submit" className={styles.button} style={background} />
            </div>
            <div>
              <button type="submit" className={styles.buttonSelected} style={background} />
            </div>
            <div>
              <button type="submit" className={styles.button} style={background} />
            </div>
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
