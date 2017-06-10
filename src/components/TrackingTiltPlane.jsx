import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TiltPlane from 'TiltPlane';
import { Motion, spring } from 'react-motion';

function calculateTilt(maxDeg, mousePos, size) {
  const halfSize = size / 2;
  const mouseOffset = mousePos - halfSize;

  return (mouseOffset / halfSize) * maxDeg;
}

const TrackingTiltPlane = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    invertX: React.PropTypes.bool,
    invertY: React.PropTypes.bool,
    maxTiltDeg: React.PropTypes.number,
    perspective: React.PropTypes.number,
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      maxTiltDeg: 60,
      invertX: false,
      invertY: false,
    };
  },

  getInitialState() {
    return {
      tiltX: 0,
      tiltY: 0,
    };
  },

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseout', this.onMouseOut);
  },

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseout', this.onMouseOut);
  },

  onMouseMove(event) {
    const maxTiltDeg = this.props.maxTiltDeg;

    this.setState({
      tiltX: -calculateTilt(maxTiltDeg, event.pageY, window.innerHeight)
        .toFixed(1),
      tiltY: calculateTilt(maxTiltDeg, event.pageX, window.innerWidth)
        .toFixed(1),
    });
  },

  onMouseOut() {
    this.setState({
      tiltX: 0,
      tiltY: 0,
    });
  },

  render() {
    const {
      children,
      invertX,
      invertY,
    } = this.props;

    const tiltX = invertX ? -this.state.tiltX : this.state.tiltX;
    const tiltY = invertY ? -this.state.tiltY : this.state.tiltY;

    return (
      <Motion
        defaultStyle={{ tiltX: 0, tiltY: 0 }}
        style={{ tiltX: spring(tiltX), tiltY: spring(tiltY) }}
      >
        {value => (
          <TiltPlane {...this.props} {...value}>
            {children}
          </TiltPlane>
        )}
      </Motion>
    );
  },
});

export default TrackingTiltPlane;
