import React from 'react';
import styles from './styles/previewCarousel.css';

class PreviewCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // if the prop is selected then give it a certain class versus other class
    // buttonSelected vs not Selected
    // console.log('INSIDE of PREVIEWWW');
  }


  render() {
    const { photo, onClick, id, selectedIndex } = this.props;
    const background = {
      'background-image': `url(${photo.url})`,
    };
    // console.log('BACKGROUND', background);
    const selected = (selectedIndex === id) ? styles.buttonSelected : styles.button;

    // GIVE EVERYTHING a style conditional, if it is equal to the index from props
    // then it will have a class change, this class change will be a transform -translate x
    // transform: translateX(-variable%) -- 100%/number of photos * index, so all i need is index from parent
    // also the indexed photo will have to get the highlight class.

    return (
      <div>
        <button type="submit" className={`${id} ${selected}`} style={background} onClick={onClick}/>
      </div>
    );
  }
}

export default PreviewCarouselItem;