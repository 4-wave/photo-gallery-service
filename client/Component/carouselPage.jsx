import React from 'react';
import styles from './styles/carousel.css';
import ClosePage from './helper/SVGIcon.jsx'
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

    this.photos = props.info.urls;
    this.onClickHandle = this.onClickHandle.bind(this);
    this.setState = Promise.promisify(this.setState);
    this.nextListing = this.nextListing.bind(this);
    this.previousListing = this.previousListing.bind(this);
  }

  onClickHandle(e) {
    const clickedPhotoIndex = Number(e.target.className.split(' ')[0]);

    this.setState(() => ({
      visible: false,
    }))
      .then(() => {
        setTimeout(() => {
          this.setState({
            carouselPhotoIndex: clickedPhotoIndex,
            visible: true,
          });
        }, 100);
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
    } else { // cycles to the begingin, if user reaches end of photos
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
    } else { // cycles back to the end if user reaches begining of carousel
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

    return (
      <div className={styles.galleryPageContainer}>

        <div className={styles.closePage}>
          <ClosePage
            width={25}
            onClick={onClick}
            className={styles.x}
          />
        </div>

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
