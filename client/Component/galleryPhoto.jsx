import React from 'react';
import styles from './styles/gallery.css'

function GalleryPhoto (props) {
  const {darken, undarken, identity, photo, positioning} = props;

  const imgCss = styles[`img${identity}`];
  const imgUrl = photo.url;

  return (
    <div className={imgCss}>
      <div
        className={`${identity} ${positioning}`}
        style={{ 'background-image': `url(${imgUrl})` }}
        onMouseOver={darken}
        onMouseLeave={undarken}
        onFocus={darken}
      />
    </div>
  );
}

export default GalleryPhoto;
