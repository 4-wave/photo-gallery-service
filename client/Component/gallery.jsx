import React from 'react';
import styles from './styles/gallery.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img1css: styles.img1, 
            img2css: styles.img2,
            img3css: styles.img3,
            img4css: styles.img4,
            img5css: styles.img5,
            img1url: props.info.urls[0].url,
            img2url: props.info.urls[1].url,
            img3url: props.info.urls[2].url,
            img4url: props.info.urls[3].url,
            img5url: props.info.urls[4].url,
        };

        console.log('INSIDE GALLERY', props.info.urls)
        //if only recieving three imgages in the props, then state changes to disappear
        //how does that funtion run? it it a component did mount?

        if (props.info.urls.length < 5) {
            //set change the state so it only shows 3 images
            //it will throw an error if i am trying to find url[4] which doesnt exist, even if i hide the grid
            //also my states are throwing an error since they are looking for an array element that doesnt exist
            //also my render components are throwing an error,
            //to fix this i should make a gallery item component that can create states as needed. add css as needed.
            this.setState ({
                img4css: styles.disappear,
                img5css: styles.disappear
            })
        }
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
