import React from 'react';
import styles from './styles/gallery.css'

class GalleryPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCss: styles[`img${props.identity}`],
      imgUrl: props.photo.url,
    };
  }

  render() {
    return (
      <div className={`hello ${this.state.imgCss}`}>
        <div 
          className={`${this.props.identity} ${this.props.css}`} 
          style={{ 'background-image': `url(${this.state.imgUrl})` }} 
          onMouseOver={this.props.darken} 
          onMouseLeave={this.props.undarken}
        />
      </div>
    );
  }
}

export default GalleryPhoto;
