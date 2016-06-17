import React from 'react';
import { Motion, spring } from 'react-motion';

import { cssVendorPrefix } from 'utils';
import View from 'View';

const Randomizer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired,
    randomizerFn: React.PropTypes.func.isRequired,
    springConfig: React.PropTypes.array,
    values: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      values: this.props.values,
    };
  },

  onAction() {
    this.setState({
      values: this.randomize(this.props.values),
    });
  },

  onRelease() {
    this.setState({
      values: this.props.values,
    });
  },

  randomize(values) {
    const randomizedValues = {};

    Object.keys(values).forEach(key => {
      randomizedValues[key] = this.props.randomizerFn(values[key]);
    });

    return randomizedValues;
  },

  render() {
    const {
      children,
      springConfig,
    } = this.props;

    const {
      values,
    } = this.state;

    const motionValues = {};
    Object.keys(values).forEach(key => {
      motionValues[key] = spring(values[key], springConfig);
    });

    return (
      <Motion defaultStyle={this.props.values} style={motionValues}>
        {springValues => children(motionValues, this.onAction, this.onRelease)}
      </Motion>
    );
  },
});

export default Randomizer;
