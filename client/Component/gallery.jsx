import React from 'react';
import styles from './styles/gallery.css'

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            img1css: styles.img1, 
            img2css: styles.img2,
            img3css: styles.img3,
            img4css: styles.img4,
            img5css: styles.img5,
            img1url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bedroom6.jpg",
            img2url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/livingroom6.jpg",
            img3url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bathroom6.jpg",
            img4url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/feature6.jpg",
            img5url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/outside6.jpg",
        };

        //if only recieving three imgages in the props, then state changes to disappear
        //how does that funtion run? it it a component did mount?
    }

    render() {
        //going to temporarily replace the images so i dont keep using GET reqs from AWS
        
        return (
            <div className={styles.container}>

                <div className = {this.state.img1css} style = {
                    {'background-image': `url(${this.state.img1url})`,}
                }></div>

                <div className={`hello ${this.state.img2css}`} style = {
                    {'background-image': `url(${this.state.img2url})`,}
                } ></div>

                <div className = {this.state.img3css} style = {
                    {'background-image': `url(${this.state.img3url})`,}
                } ></div>

                <div className = {this.state.img4css} style = {
                    {'background-image': `url(${this.state.img4url})`,}
                } ></div>

                <div className = {this.state.img5css} style = {
                    {'background-image': `url(${this.state.img5url})`,}
                } ></div>

            </div>
    );
  }
}

export default Gallery;
