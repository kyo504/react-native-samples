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
        onIncrement={() => this.setState({ value: this.state.value + 1 })}
        onDecrement={() => this.setState({ value: this.state.value - 1 })}
      />
    );
  }
}
