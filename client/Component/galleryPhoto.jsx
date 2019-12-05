import React from 'react';
import styles from './styles/gallery.css'

class GalleryPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCss: styles[`img${props.type}`],
      imgUrl: props.photo.url,
      innerDivCss: styles.divInner,
    };
  }

  darkenOtherPohots(e) {
    console.log(e.target.className.split(" ")[0]);
    this.setState({
      innerDivCss: styles.divInnerDarken,
    });
  }

  undarkenOtherPhotos(e) {
    console.log(e.target.className.split(" ")[0]); //ACTUALLY this needs to happen in the parent, since only parent can see all of the divs
    console.log('I stopped hovering');
    this.setState({
      innerDivCss: styles.divInner,
    });
  }

  render() {
    return (
      <div className={`hello ${this.state.imgCss}`}>
        <div className={`${this.props.type} ${this.state.innerDivCss}`} style={{ 'background-image': `url(${this.state.imgUrl})` }} 
        onMouseOver={this.darkenOtherPohots.bind(this)} onMouseLeave={this.undarkenOtherPhotos.bind(this)}
        />
      </div>
    );
  }
}

export default GalleryPhoto;
