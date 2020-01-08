import React from "react";
import axios from "axios";
import Gallery from "./gallery.jsx";
import CarouselPage from "./carouselPage.jsx";
import styles from "./styles/app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: {
        name: "placeholder",
        urls: []
      },
      show: {
        gallery: true,
        photo: 0
      }
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    let endpoint;
    if (window.location.pathname === "/") {
      endpoint = 1;
    } else {
      endpoint = window.location.pathname.split("/")[1];
    }
    axios
      .get(`http://54.177.59.24:3008/airbnb/listings/${endpoint}`)
      .then(data => {
        let urls = [];
        data.data.map(photo => {
          let photo_url = photo.photo_url.replace(/['"]+/g, "");
          urls.push(photo_url);
        });
        this.setState({
          photos: {
            name: "placeholder",
            urls: urls
          }
        });
      });
  }

  changePage(e) {
    let photoNumber; // lets me use the same click function on different DOM element types
    if (e.target.nodeName === "DIV") {
      photoNumber = Number(e.target.className.split(" ")[0]);
    } else {
      photoNumber = 0;
    }

    const { show } = this.state;
    this.setState({
      show: {
        gallery: !show.gallery,
        photo: photoNumber
      }
    });
  }

  render() {
    // Stops scrolling of the page if Modal opens up
    const { show, photos } = this.state;
    const objRef = document.body;
    if (!show.gallery) {
      objRef.style["overflow-y"] = "hidden";
    } else {
      objRef.style["overflow-y"] = "auto";
    }

    if (show.gallery) {
      return (
        <div>
          <Gallery info={photos} onClick={this.changePage} />
        </div>
      );
    }
    return (
      <div className={styles.CarouselPage}>
        <CarouselPage
          onClick={this.changePage}
          info={photos}
          showPhoto={show}
        />
      </div>
    );
  }
}

export default App;
