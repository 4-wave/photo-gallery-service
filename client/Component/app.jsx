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
      show: {
        gallery: true,
        photo: 0,
      },
    };

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    let endpoint;
    if (window.location.pathname === '/') {
      endpoint = 1;
    } else {
      endpoint = window.location.pathname.split('/')[1];
    }
    axios.get(`/airbnb/listings/${endpoint}`)
      .then((data) => {
        this.setState({
          photos: data.data,
        }, () => {
          console.log('CURRENT STATE', this.state);
        });
      });
  }

  changePage(e) {
    console.log('I AM CLICKEDD', e.target.className.split(' ')[0])

    this.setState({
      show: {
        gallery: false,
        photo: e.target.className.split(' ')[0],
      },
    });
  }

  render() {
    const { show, photos } = this.state;
    if (show.gallery) {
      return (
        <div>
          <Gallery info={photos} popup={this.changePage} onClick={this.changePage} />
        </div>
      );
    } else if (!show.gallery) {
      return (
        <div>
          {show.photo}
        </div>
      )
    };
  }
}

export default App;
