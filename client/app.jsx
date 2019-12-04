import React from 'react';
import axios from 'axios';
import Gallery from './Component/gallery.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: {name:'placeholder', urls:[{url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bedroom5.jpg"},
                                         {url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/livingroom5.jpg"},
                                         {url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/bathroom5.jpg"},
                                         {url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/feature5.jpg"},
                                         {url: "https://airbnbphotogallery.s3-us-west-1.amazonaws.com/outside5.jpg"},
                                        ]},
    };
  //the photo will hold the photo of the listing
  //how will I grab the right 
  }

  componentDidMount() {
    if (window.location.pathname === '/') {
      var endpoint = 1;
    } else {
      var endpoint = window.location.pathname.split('/')[1]
    }
    axios.get(`/airbnb/listings/${endpoint}`)
      .then((data) => {
        this.setState({
          photos: data.data
        }, () => {
          console.log('CURRENT STATE',this.state)
          //for some reason when the state changes, gallery does not re-render with the new states (images)
        })
      });
  }

  render() {
    return (
      <div>
        <Gallery info = {this.state.photos}/>
      </div>
    );
  }
}


export default App;
