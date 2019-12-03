import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: 1,
    });
  }

  render() {
    return (
      <div>
        <p>
          Current Count:
          {this.state.count}
        </p>
        <button onClick={this.increment.bind(this)}>Increment Count</button>
      </div>
    )
  }

}

module.exports = Counter;
