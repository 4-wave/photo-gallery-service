import React from 'react';
import styles from './styles/carousel.css';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      currentPhoto: props.photos.urls[0].url,
      visible: true,
    };

    this.toggleAppear = this.toggleAppear.bind(this);
    this.nextProperty = this.nextProperty.bind(this);
    this.previousProperty = this.previousProperty.bind(this);
  }

// what airbnb does it they render one pic at a time, and it has transition effects...will that effect appear with re-rendering??
// use this for styling
//   <img src="https://a0.muscache.com/im/pictures/228c1bc5-3c0c-4fe3-928e-0d4d016e4756.jpg?aki_policy=x_large" 
//   alt="" data-veloute="slideshow-image" 
//   style="height: 100%; max-width: 100%; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; margin: 0px auto; vertical-align: middle; border: 0px; opacity: 1; transform: translateX(0px); transition: opacity 150ms ease-out 0s, transform 150ms ease-out 0s;"></img>

  toggleAppear() {
  };

  nextProperty() {
    // right now it stops but i need to make it circulate
    if (this.state.counter < this.props.photos.urls.length-1) {
      this.setState({
        visible: false,
        counter: this.state.counter + 1,
      }, () => {
        setTimeout(() => {
          this.setState({
            currentPhoto: this.props.photos.urls[this.state.counter].url,
            visible: true,
          });
        }, 100);
      });
    }
  }

  previousProperty() {
    if (this.state.counter > 0) {
      this.setState({
        visible: false,
        counter: this.state.counter - 1,
      }, () => {
        setTimeout(() => {
          this.setState({
            currentPhoto: this.props.photos.urls[this.state.counter].url,
            visible: true,
          });
        }, 100);
      });
    }
  }

  render() {
    const Next = '>';
    const Prev = '<';
    const { currentPhoto } = this.state;
    const style = {
      'background-image': `url(${currentPhoto})`,
    };
    const fade = this.state.visible ? styles.fadeIn : styles.fadeOut;

    return (
      <div className={styles.test}>

        <button onClick={this.toggleAppear} type="button">Appear</button>

        <button onClick={this.previousProperty} type="button">
          {Prev}
        </button>

        <button onClick={this.nextProperty} type="button">
          {Next}
        </button>

        <div
          className={`${styles.test} ${fade}`}
          style={style}
        />

      </div>
    );
  }
}

export default MainCarousel;
