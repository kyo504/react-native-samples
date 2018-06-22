import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';
import store from '../store/configureStore';
import { increment, decrement } from '../actions';

class CounterReduxExample2 extends Component {
  constructor(props) {
    super(props);

    store.subscribe(this.onStoreUpdate);
  }

  onStoreUpdate = (event) => {
    this.forceUpdate();
  }

  onIncrement = () => {
    store.dispatch(increment());
  }

  onDecrement = () => {
    store.dispatch(decrement());
  }

  render() {
    const { count } = store.getState().counter;
    return <Counter value={count} increment={this.onIncrement} decrement={this.onDecrement} />;
  }
}

export default CounterReduxExample2;
