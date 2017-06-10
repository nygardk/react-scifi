import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { cssVendorPrefix } from 'utils';
import View from './View';

class Scale extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    scale: PropTypes.number,
    style: PropTypes.object,
  }

  render() {
    const {
      children,
      className,
      scale,
      style,
      ...rest
    } = this.props;

    const scaleStyle = {
      ...cssVendorPrefix('transform', `scale(${scale})`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <View
        className={cx('Scale', className)}
        style={{ ...scaleStyle, ...style }}
        {...rest}
      >
        {children}
      </View>
    );
  }
}

export default Scale;
