import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { cssVendorPrefix } from 'utils';
import View from './View';
import './Rotator.styl';

class Rotator extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    spinDuration: PropTypes.number, // ms
    spinDirection: PropTypes.oneOf(['cw', 'ccw']),
    style: PropTypes.object,
  }

  static defaultProps = {
    spinDirection: 'cw',
  }

  render() {
    const {
      children,
      className,
      spinDirection,
      spinDuration,
      style,
      ...rest
    } = this.props;

    const rotationKeyrames = spinDirection === 'cw'
      ? 'rotatorcw'
      : 'rotatorccw';

    const rotatorStyle = {
      ...cssVendorPrefix('animation', `${rotationKeyrames} ${spinDuration}ms linear infinite`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <View
        className={cx('Rotator', className)}
        style={{ ...rotatorStyle, ...style }}
        {...rest}
      >
        {children}
      </View>
    );
  }
}

export default Rotator;
