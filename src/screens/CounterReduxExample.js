import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Counter from '../components/Counter';

class CounterReduxExample extends Component {
  render() {
    const { count, actions } = this.props;
    return <Counter value={count} {...actions} />;
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterReduxExample);
