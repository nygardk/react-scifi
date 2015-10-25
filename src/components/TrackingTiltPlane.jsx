import React from 'react';

import TiltPlane from 'TiltPlane';
import { Motion, spring } from 'react-motion';

function calculateTilt(maxDeg, mousePos, size) {
  const halfSize = size / 2;
  const mouseOffset = mousePos - halfSize;

  return mouseOffset / halfSize * maxDeg;
}

const TrackingTiltPlane = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    maxTiltDeg: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      maxTiltDeg: 60,
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
      tiltX: -calculateTilt(maxTiltDeg, event.pageY, window.innerHeight),
      tiltY: calculateTilt(maxTiltDeg, event.pageX, window.innerWidth),
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
      tiltX,
      tiltY,
    } = this.state;

    return (
      <Motion defaultStyle={{tiltX: 0, tiltY: 0}}
        style={{tiltX: spring(tiltX), tiltY: spring(tiltY)}}>
        {value => (
          <TiltPlane {...this.props} {...value}>
            {this.props.children}
          </TiltPlane>
        )}
      </Motion>
    );
  },
});

export default TrackingTiltPlane;
