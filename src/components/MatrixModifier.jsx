import React from 'react';
import { Motion, spring } from 'react-motion';

import { cssVendorPrefix } from 'utils';
import View from 'View';

const MatrixModifier = React.createClass({
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

  onRandomize() {
    this.setState({
      values: this.props.randomizerFn(this.state.values),
    });
  },

  onRelease() {
    this.setState({
      values: this.props.values,
    });
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
        {springValues => children(motionValues, this.onRandomize, this.onRelease)}
      </Motion>
    );
  },
});

export default MatrixModifier;
