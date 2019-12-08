import React from 'react';
import axios from 'axios';
import Gallery from './gallery.jsx';
import CarouselPage from './carouselPage.jsx';

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
        });
      });
  }

  changePage(e) {
    let photoNumber; // lets me use the same click function on different DOM element types
    if (e.target.nodeName === 'DIV') {
      photoNumber = Number(e.target.className.split(' ')[0]);
    } else {
      photoNumber = 0;
    }

    const { show } = this.state;
    this.setState({
      show: {
        gallery: !show.gallery,
        photo: photoNumber,
      },
    });
  }

  render() {
    const { show, photos } = this.state;
    if (show.gallery) {
      return (
        <div>
          <Gallery info={photos} onClick={this.changePage} />
        </div>
      );
    }
    return (
      <div>
        <CarouselPage onClick={this.changePage} info={photos} showPhoto={show} />
      </div>
    );
  }
}

export default App;
