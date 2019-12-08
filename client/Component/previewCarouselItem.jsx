import React from 'react';
import styles from './styles/previewCarousel.css';

class PreviewCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // if the prop is selected then give it a certain class versus other class
    // buttonSelected vs not Selected
    // console.log('INSIDE of caroITem', props);
  }


  render() {
    const { photo, onClick } = this.props;
    const background = {
      'background-image': `url(${photo.url})`,
    };
    // console.log('BACKGROUND', background);
    // const selected = this.props.selected ? styles.button : styles.buttonSelected;

    return (
      <div>
        <button type="submit" className={styles.button} style={background} onClick={onClick}/>
      </div>
    );
  }
}

export default PreviewCarouselItem;