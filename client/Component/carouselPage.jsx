import React from 'react';
import styles from './styles/carousel.css';
import Icon from './helper/SVGIcon.jsx'
import MainCarousel from './mainCarousel.jsx';
import PreviewCarousel from './previewCarousel.jsx';
import { Promise } from 'bluebird';


class CarouselPage extends React.Component {
  constructor(props) {
    super(props);
    const { showPhoto } = props;
    this.state = {
      carouselPhotoIndex: showPhoto.photo - 1,
      visible: true,
    };
    console.log(this.state, 'CARO PAGE', showPhoto);

    this.photos = props.info.urls;
    this.onClickHandle = this.onClickHandle.bind(this);
    this.setState = Promise.promisify(this.setState);
    this.nextListing = this.nextListing.bind(this);
    this.previousListing = this.previousListing.bind(this);
  }

  onClickHandle(e) {
      console.log('I FAILED HERE')
    const clickedPhotoIndex = Number(e.target.className.split(' ')[0]);
    this.setState({
      carouselPhotoIndex: clickedPhotoIndex,
    });
  }

  nextListing() {
    const { carouselPhotoIndex } = this.state;

    if (carouselPhotoIndex < this.photos.length - 1) {
      this.setState(() => ({
        visible: false,
      }))
        .then(() => {
          setTimeout(() => {
            this.setState({
              carouselPhotoIndex: carouselPhotoIndex + 1,
              visible: true,
            });
          }, 100);
        });
    } else { // cycles
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              carouselPhotoIndex: 0,
              visible: true,
            });
          }, 100);
        });
    }
  }

  previousListing() {
    const { carouselPhotoIndex } = this.state;

    if (carouselPhotoIndex > 0) {
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              carouselPhotoIndex: carouselPhotoIndex - 1,
              visible: true,
            });
          }, 100);
        });
    } else { // cycles
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              carouselPhotoIndex: this.photos.length - 1,
              visible: true,
            });
          }, 100);
        });
    }
  }

  render() {
    const { info, onClick } = this.props;
    const { carouselPhotoIndex, visible } = this.state;
    // console.log('DID RENDER RERENDER?', carouselPhotoIndex, info, this.nextListing, this.previousListing);

    return (
      <div className={styles.galleryPageContainer}>

        <div className={styles.closePage}>
            {/* Give this some padding and margin, using styling later */}
          <Icon
            width={25}
            onClick={onClick}
            className={styles.x}
          />
        </div>
        {/* issue inside main carousel, no longer need to send all of the info, just the right photo */}
        <div className={styles.pageMainPositioning}>
          <MainCarousel
            photos={info}
            index={carouselPhotoIndex}
            nextListing={this.nextListing}
            previousListing={this.previousListing}
            visible={visible}
          />
        </div>

        <div className={styles.previewGalleryContainer}>
          <PreviewCarousel
            photos={info}
            photoClick={this.onClickHandle}
            selectedIndex={carouselPhotoIndex}
          />
        </div>

      </div>
    );
  }
}

export default CarouselPage;
