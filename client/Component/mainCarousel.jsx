import React from 'react';
import { Promise } from 'bluebird';
import styles from './styles/carousel.css';
import NextButton from './helper/rightArrowSVG.jsx';
import PrevButton from './helper/leftArrowSVG.jsx';


class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0,
      visible: true,
    };
    this.photos = props.photos.urls


    this.nextProperty = this.nextProperty.bind(this);
    this.previousProperty = this.previousProperty.bind(this);
    this.setState = Promise.promisify(this.setState);
  }

  componentDidMount() {
    this.setState({
      currentPhotoIndex: Number(this.props.id),
    });
  }

  nextProperty() {
    const { currentPhotoIndex } = this.state;

    if (currentPhotoIndex < this.photos.length - 1) {
      this.setState(() => ({
        visible: false,
      }))
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: currentPhotoIndex + 1,
              visible: true,
            });
          }, 100);
        });
    } else {
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: 0,
              visible: true,
            });
          }, 100);
        });
    }
  }

  previousProperty() {
    const { currentPhotoIndex } = this.state;

    if (currentPhotoIndex > 0) {
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: currentPhotoIndex - 1,
              visible: true,
            });
          }, 100);
        });
    } else {
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: this.photos.length - 1,
              visible: true,
            });
          }, 100);
        });
    }
  }

  render() {
    const { currentPhotoIndex, visible } = this.state;
    const url = this.photos[currentPhotoIndex].url
    const style = {
      'background-image': `url(${url})`,
    };
    const fade = visible ? styles.fadeIn : styles.fadeOut;

    return (
      <div className={styles.mainGalleryContainer}>

        <button onClick={this.previousProperty} type="button" className={styles.leftArrow}>
          <PrevButton width={24} />
        </button>

        <button onClick={this.nextProperty} type="button" className={styles.rightArrow}>
          <NextButton width={24} />
        </button>

        <div
          className={`${styles.mainGallery}`}
        >
          <div className={`${styles.mainPhoto} ${fade}`} style={style} />
        </div>

      </div>
    );
  }
}

export default MainCarousel;
