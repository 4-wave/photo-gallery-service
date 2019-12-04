//the page is dynamic depending on its size
//743x706px or LESS page has just one pic
//744x706px - 1127x706  is three pictures
// 1128 and above is 5 pics

import React from 'react';
import styles from './styles/gallery.css'

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        //going to temporarily replace the images so i dont keep using GET reqs from AWS
        
        const img1 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bedroom6.jpg")',
        }
        const img2 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bathroom6.jpg")',
        }
        const img3 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/livingroom6.jpg")',
        }
        const img4 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/feature6.jpg")',
        }
        const img5 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/outside6.jpg")',
        }
        
        return (
            <div className={styles.container}>
                <div className = {styles.img1} style = {img1}>
                </div>

                <div className={`hello ${styles.img2}`} style = {img2} >
                </div>

                <div className = {styles.img3} style = {img3} >
                </div>

                <div className = {styles.img4} style = {img4} >
                </div>

                <div className = {styles.img5} style = {img5}>
                </div>

            </div>
    );
  }
}

export default Gallery;
