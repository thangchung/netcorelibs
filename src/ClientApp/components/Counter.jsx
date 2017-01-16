import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';
import * as WeatherForecasts from '../store/WeatherForecasts';
import { increment, decrement } from '../store/Counter';

class Counter extends Component {
    render() {
        return <div>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p>Current count: <strong>{this.props.count}</strong></p>
            <button onClick={() => { this.props.increment() } }>+</button>&nbsp;
            <button onClick={() => { this.props.decrement() } }>-</button>
        </div>;
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(CounterStore.actionCreators, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
