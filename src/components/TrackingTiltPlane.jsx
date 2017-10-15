import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Motion, spring } from 'react-motion';

import TiltPlane from './TiltPlane';

function calculateTilt(maxDeg, mousePos, size) {
  const halfSize = size / 2;
  const mouseOffset = mousePos - halfSize;

  return (mouseOffset / halfSize) * maxDeg;
}

class TrackingTiltPlane extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    invertX: PropTypes.bool,
    invertY: PropTypes.bool,
    maxTiltDeg: PropTypes.number,
  }

  static defaultProps = {
    maxTiltDeg: 60,
    invertX: false,
    invertY: false,
  }

  state = {
    tiltX: 0,
    tiltY: 0,
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseout', this.onMouseOut);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseout', this.onMouseOut);
  }

  onMouseMove = (event) => {
    const { maxTiltDeg } = this.props;

    this.setState({
      tiltX: -calculateTilt(maxTiltDeg, event.pageY, window.innerHeight)
        .toFixed(1),
      tiltY: calculateTilt(maxTiltDeg, event.pageX, window.innerWidth)
        .toFixed(1),
    });
  }

  onMouseOut = () => this.setState({
    tiltX: 0,
    tiltY: 0,
  })

  render() {
    const {
      children,
      className,
      invertX,
      invertY,
      maxTiltDeg,
      ...rest
    } = this.props;

    const tiltX = invertX ? -this.state.tiltX : this.state.tiltX;
    const tiltY = invertY ? -this.state.tiltY : this.state.tiltY;

    return (
      <Motion
        defaultStyle={{ tiltX: 0, tiltY: 0 }}
        style={{ tiltX: spring(tiltX), tiltY: spring(tiltY) }}
      >
        {value => (
          <TiltPlane
            className={cx(className, 'TrackingTiltPlage')}
            {...rest}
            {...value}
          >
            {children}
          </TiltPlane>
        )}
      </Motion>
    );
  }
}

export default TrackingTiltPlane;
