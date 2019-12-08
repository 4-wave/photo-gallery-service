import React from 'react';
import styles from './styles/previewCarousel.css';

class PreviewCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { photo, onClick, id, selectedIndex } = this.props;
    const background = {
      'background-image': `url(${photo.url})`,
    };
    const selected = (selectedIndex === id) ? styles.buttonSelected : styles.button;
    // since this knows the id, and is also giving the right id, i just need to scroll the 
    // page by the right diviations

    return (
      <div>
        <button
          type="submit" 
          className={`${id} ${selected}`}
          style={background} onClick={onClick}
        />
      </div>
    );
  }
}

export default PreviewCarouselItem;
