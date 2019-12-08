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
    this.counter = Number(this.props.id);
    this.photos = props.photos.urls

    // console.log('WHY IS THE PHOTO always off? but works with 1 and not 0', props);

    this.nextProperty = this.nextProperty.bind(this);
    this.previousProperty = this.previousProperty.bind(this);
    this.setState = Promise.promisify(this.setState);
  }

  componentDidMount() {
    this.setState({
      currentPhotoIndex: Number(this.counter) - 1, // make this reference counter
    //   counter: Number(this.props.id) - 1,
    })
      .then(() => {
        console.log('Component did mount set the counter to:', this.counter);
      });
  }


  nextProperty() {
    // const { counter } = this.state;
    if (this.counter < this.photos.length) {
      this.counter += 1;
      this.setState(() => ({
        visible: false,
        // counter: prevState.counter + 1,
      }))
        .then(() => {
        //   console.log('NEW counter is', this.state.counter)
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: this.counter - 1,
              visible: true,
            });
          }, 100);
        });
    } else {
      this.counter = 0;
      this.setState({
        visible: false,
        // counter: 0,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: this.counter - 1,
              visible: true,
            });
          }, 100);
        });
    }
  }

  previousProperty() {
    if (this.counter > -1) {
      this.counter -= 1;
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: this.counter - 1,
              visible: true,
            });
          }, 100);
        });
    } else {
      this.counter = this.photos.length - 1;
      this.setState({
        visible: false,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhotoIndex: this.counter - 1,
              visible: true,
            });
          }, 100);
        });
    }
  }

  render() {
    const { currentPhotoIndex, visible } = this.state;
    console.log('about to read the url of this index', currentPhotoIndex);
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
        // what if i make this a flex
        // alig the img inside in the center, and give that div the rounded shape
        // and a set width and height..? or top limit but not bottom

          className={`${styles.mainGallery}`}
        >
          <div className={`${styles.mainPhoto} ${fade}`} style={style} />
        </div>

      </div>
    );
  }
}

export default MainCarousel;
