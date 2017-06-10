import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { cssVendorPrefix } from 'utils';
import View from './View';

class TiltPlane extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    perspective: PropTypes.number,
    style: PropTypes.object,
    tiltX: PropTypes.number, /* deg */
    tiltY: PropTypes.number, /* deg */
  }

  static defaultProps = {
    perspective: 500,
    tiltX: 0,
    tiltY: 0,
  }

  render() {
    const {
      children,
      className,
      perspective,
      style,
      tiltX,
      tiltY,
      ...rest
    } = this.props;

    const tiltPlaneStyle = {
      height: '100%',
      width: '100%',
      perspective,
      perspectiveOrigin: '50% 50%',
      ...cssVendorPrefix('transform', `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`),
      ...cssVendorPrefix('transformStyle', 'preserve-3d'),
    };

    return (
      <View
        className={cx('TiltPlane', className)}
        style={{ ...tiltPlaneStyle, ...style }}
        {...rest}
      >
        {children}
      </View>
    );
  }
}

export default TiltPlane;
