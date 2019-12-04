import React from 'react';
import axios from 'axios';
import Gallery from './Component/gallery.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
    // console.log(Gallery, 'HEREEE')
  }

  componentDidMount() {
    // axios.get('/airbnb/listings')
    //   .then((data) => {
    //     console.log(data.data);
    //   });
  }

  render() {
    return (
      <div>
        <Gallery/>
      </div>
    );
  }
}


export default App;
