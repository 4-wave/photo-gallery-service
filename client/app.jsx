import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('/airbnb/listings')
      .then((data) => {
        console.log(data.data);
      });
  }

  render() {
    return (
      <div>PLACEHOLDER</div>
    );
  }
}


export default App;
