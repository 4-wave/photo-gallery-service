import React from 'react';
import axios from 'axios';
import Gallery from './gallery.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: {
        name: 'placeholder',
        urls: [],
      },
    };
  }

  componentDidMount() {
    let endpoint;
    if (window.location.pathname === '/') {
      endpoint = 1;
    } else {
      endpoint = window.location.pathname.split('/')[1];
    }
    fetchData(endpoint);
  }

  

  render() {
    return (
      <div>
        <Gallery info={this.state.photos} />
      </div>
    );
  }
}

export function fetchData(endpoint) {
  axios.get(`/airbnb/listings/${endpoint}`)
    .then((data) => {
      this.setState({
        photos: data.data,
      }, () => {
        console.log('CURRENT STATE', this.state);
      });
    });
}


export default App;
