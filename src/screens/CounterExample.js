import React, { Component } from 'react';

import Counter from '../components/Counter';

export default class CounterExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <Counter
        value={this.state.value}
        increment={() => this.setState({ value: this.state.value + 1 })}
        decrement={() => this.setState({ value: this.state.value - 1 })}
      />
    );
  }
}
