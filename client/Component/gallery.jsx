//the page is dynamic depending on its size
//743x706px or LESS page has just one pic
//744x706px - 1127x706  is three pictures
// 1128 and above is 5 pics

import React from 'react';

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        //going to temporarily replace the images so i dont keep using GET reqs from AWS
        const container = {
            'width': '100%',
            'height': '400.000px',  //this will need to be dynamic it seems
            'background-color': 'gray',
            display: 'grid',
            'grid-template-columns': 'auto auto auto auto',
            'grid-template-rows': 'auto auto',
            'grid-column-gap': '1px',
            'grid-row-gap': '1px',
            'object-fit': 'contain',
            
        }
        const img1 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bedroom6.jpg")',
            'grid-row': '1/ span 2',
            'grid-column': '1 / span 2',
            'overflow': 'hidden',
            'background-size': 'contain',
        }
        const img2 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bathroom6.jpg")',
            'overflow': 'hidden',
            'background-size': 'contain',
            'grid-row': '1',
            'grid-column': '3',
        }
        const img3 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/livingroom6.jpg")',
            'grid-row': '2',
            'grid-column': '3',
            'overflow': 'hidden',
            'background-size': 'contain',
        }
        const img4 = {
            'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/feature6.jpg")',
            'grid-row': '1',
            'grid-column': '4',
            'overflow': 'hidden',
            'background-size': 'contain',
        }
        const img5 = {
            // 'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/outside6.jpg")',
            'grid-row': '2',
            'grid-column': '4',
            'overflow': 'hidden',
            'background-size': 'contain',
        }
        
      


        return (
            <div className="OutsideContainer" style={container}>
                <div style = {img1}>
                </div>

                <div style={img2}>
                </div>

                <div style = {img3} >
                </div>

                <div style = {img4} >
                </div>

                <div style = {img5} style = {{'background-image': 'url("https://airbnbphotogallery.s3-us-west-1.amazonaws.com/outside6.jpg")', 'background-size': 'contain'}}>
                </div>

            </div>
    );
  }
}

export default Gallery;
