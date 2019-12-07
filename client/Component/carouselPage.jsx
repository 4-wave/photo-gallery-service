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
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  // this needs an onclick function, If any of the carosouls click this button then it sends them
  // new props that reRenders the state
  // this should also send all of the photos to 

  onClickHandle(e) {
      console.log('I was clicked and am in the parent', e.target)
  }

  render() {
    const { info, onClick, showPhoto } = this.props;
    let photoId = showPhoto.photo;
    return (
      <div className={styles.galleryPageContainer}>

        <div className={styles.closePage}>
            {/* Give this some padding and margin, using styling later */}
          <Icon width={25} onClick={onClick} className={styles.x} />
        </div>

        <div className={styles.pageMainPositioning}>
          <MainCarousel photos={info} id={photoId} />
        </div>

        <div className={styles.previewGalleryContainer}>
          <PreviewCarousel photos={info} photoClick={this.onClickHandle} />
        </div>

      </div>
    );
  }
}

export default CarouselPage;
