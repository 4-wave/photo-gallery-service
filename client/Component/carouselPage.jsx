import React from 'react';
import styles from './styles/carousel.css';
import Icon from './helper/SVGIcon.jsx'

class CarouselPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div >
          {/* <button type="button" class="_1rp5252" aria-busy="false" style="padding: 32px; margin: -32px;"><svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style="height: 24px; width: 24px; display: block; fill: rgb(72, 72, 72);"><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule="evenodd"></path></svg></button> */}
        <div>
          <Icon width={40} className="thiiSSATEST" onClick={this.props.onClick} />
        </div>
        <div>X</div>
        <div>Carousel 1 > Left, Photo, Right</div>
        <div>Carousel 2 > All photos in a row, Description of Photo/Name pf Place, Photo Number</div>
      </div>
    );
  }
}

export default CarouselPage;
