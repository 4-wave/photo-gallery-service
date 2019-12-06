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
  }

  render() {
    const { info, onClick } = this.props;
    console.log('DID OPAGE get it??', info)
    return (
      <div>

        <div>
            {/* Give this some padding and margin, using styling later */}
          <Icon width={40} onClick={onClick} />
        </div>

        <div className={styles.container}>
          <MainCarousel photos={info} />
        </div>

        <div>
          <PreviewCarousel />
        </div>

      </div>
    );
  }
}

export default CarouselPage;
