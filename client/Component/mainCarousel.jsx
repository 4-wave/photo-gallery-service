import React from 'react';
import { Promise } from 'bluebird';
import styles from './styles/carousel.css';
import NextButton from './helper/rightArrowSVG.jsx';
import PrevButton from './helper/leftArrowSVG.jsx';


class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      currentPhoto: props.photos.urls[0].url,
      visible: true,
    };

    // console.log('WHY IS THE PHOTO always off? but works with 1 and not 0', props);

    this.nextProperty = this.nextProperty.bind(this);
    this.previousProperty = this.previousProperty.bind(this);
    this.setState = Promise.promisify(this.setState);
  }

  componentDidMount() {
    this.setState({
      currentPhoto: this.props.photos.urls[Number(this.props.id) - 1].url,
      counter: Number(this.props.id) - 1,
    })
      .then(() => {
        console.log('NEW counter is', this.state.counter)
      });
  }


  nextProperty() {
    const { counter } = this.state;
    const { photos } = this.props;
    if (counter < photos.urls.length-1) {
      this.setState((prevState) => ({
        visible: false,
        counter: prevState.counter + 1,
      }))
        .then(() => {
          console.log('NEW counter is', this.state.counter)
          setTimeout(() => {
            this.setState({
              currentPhoto: photos.urls[counter].url,
              visible: true,
            });
          }, 100);
        });
    } else {
      this.setState({
        visible: false,
        counter: 0,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhoto: photos.urls[counter].url,
              visible: true,
            });
          }, 100);
        });
    }
  }

  previousProperty() {
    // need to look into why the prev doesnt go to the prev, looks like it skipped around

    const { counter } = this.state;
    const { photos } = this.props;

    if (counter > 0) {
      this.setState({
        visible: false,
        counter: counter - 1,
      })
        .then(() => {
          console.log('NEW counter is', this.state.counter)
          setTimeout(() => {
            this.setState({
              currentPhoto: photos.urls[counter].url,
              visible: true,
            });
          }, 100);
        });
    } else {
      this.setState({
        visible: false,
        counter: photos.urls.length-1,
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              currentPhoto: photos.urls[counter].url,
              visible: true,
            });
          }, 100);
        });
    }
  }

  render() {
    const Next = '>';
    const Prev = '<';
    const { currentPhoto, visible } = this.state;
    const style = {
      'background-image': `url(${currentPhoto})`,
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
          className={`${styles.mainGallery} ${fade}`}
          style={style}
        />

      </div>
    );
  }
}

export default MainCarousel;
