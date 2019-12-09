import React from 'react';
import styles from './styles/gallery.css';
import GalleryPhoto from './galleryPhoto.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img1Css: styles.divInner,
      img2Css: styles.divInner,
      img3Css: styles.divInner,
      img4Css: styles.divInner,
      img5Css: styles.divInner,
    };
    this.darkenOtherPhotos = this.darkenOtherPhotos.bind(this);
    this.undarkenOtherPhotos = this.undarkenOtherPhotos.bind(this);
  }

  darkenOtherPhotos(e) {
    const targ = e.target.className.split(' ')[0];

    const arr = [];
    for (let i = 1; i < 6; i += 1) {
      if (Number(targ) !== i) {
        const stateKey = `img${i}Css`;
        arr.push(stateKey);
      }
    }

    this.setState({
      [arr[0]]: styles.divInnerDarken,
      [arr[1]]: styles.divInnerDarken,
      [arr[2]]: styles.divInnerDarken,
      [arr[3]]: styles.divInnerDarken,
    });
  }

  undarkenOtherPhotos(e) {
    const targ = e.target.className.split(' ')[0];
    const arr = [];
    for (let i = 1; i < 6; i += 1) {
      if (Number(targ) !== i) {
        const stateKey = `img${i}Css`;
        arr.push(stateKey);
      }
    }
    this.setState({
      [arr[0]]: styles.divInner,
      [arr[1]]: styles.divInner,
      [arr[2]]: styles.divInner,
      [arr[3]]: styles.divInner,
    });
  }

  render() {
    // want to only add the first five in the gallery photo
    let galleryPhotoArr = this.props.info.urls.slice(0, 5);

    // if length is less than 5 then only render 3 imgs
    if (galleryPhotoArr.length < 5 && galleryPhotoArr.length > 2) {
      galleryPhotoArr = galleryPhotoArr.slice(0, 3);
    }

    // if less than 3, then only render 1 image
    if (galleryPhotoArr.length < 3 && galleryPhotoArr.length > 0) {
      galleryPhotoArr = galleryPhotoArr.slice(0, 1);
    }

    return (
      <div className={styles.container} onClick={this.props.onClick}>
        {galleryPhotoArr.map((item, id) => {
          return (
            <GalleryPhoto
              photo={item}
              identity={id + 1}
              darken={this.darkenOtherPhotos}
              undarken={this.undarkenOtherPhotos}
              positioning={this.state[`img${id+1}Css`]}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
