import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { cssVendorPrefix } from 'utils';

class Translate extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
    style: PropTypes.object,
  }

  static defaultProps = {
    x: 0,
    y: 0,
    z: 0,
  }

  render() {
    const {
      children,
      className,
      style,
      x,
      y,
      z,
    } = this.props;

    const TranslateStyle = {
      height: '100%',
      width: '100%',
      transformStyle: 'preserve-3d',
      ...cssVendorPrefix('transform', `translate3d(${x}px, ${y}px, ${z}px)`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <div className={cx('Translate', className)} style={{ ...TranslateStyle, ...style }}>
        {children}
      </div>
    );
  }
}

export default Translate;
