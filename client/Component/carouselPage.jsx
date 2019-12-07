import React from 'react';
import styles from './styles/carousel.css';
import Icon from './helper/SVGIcon.jsx'
import MainCarousel from './mainCarousel.jsx';
import PreviewCarousel from './previewCarousel.jsx';

class CarouselPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // console.log(props.showPhoto)
  }

  render() {
    const { info, onClick, showPhoto } = this.props;
    let photoId = showPhoto.photo;
    return (
      <div className={styles.galleryPageContainer}>

        <div className={styles.closePage}>
            {/* Give this some padding and margin, using styling later */}
          <Icon width={40} onClick={onClick} />
        </div>

        <div className={styles.pageMainPositioning}>
          <MainCarousel photos={info} id={photoId} />
        </div>

        <div className={styles.previewGalleryContainer}>
          <PreviewCarousel />
        </div>

      </div>
    );
  }
}

export default CarouselPage;
