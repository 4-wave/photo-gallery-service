import React from 'react';
import styles from './styles/gallery.css'

class GalleryPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCss: styles[`img${props.type}`],
      imgUrl: props.photo.url,
    };
  }

  render() {
    return (
      <div className={`hello ${this.state.imgCss}`} style={{ 'background-image': `url(${this.state.imgUrl})` }} />
    );
  }
}

export default GalleryPhoto;
