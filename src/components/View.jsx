import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { cssVendorPrefix } from 'utils';
import './View.styl';

class View extends PureComponent {
  static propTypes = {
    flex: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const {
      flex,
      children,
      className,
      style,
      ...rest
    } = this.props;

    const flexStyle = flex ? {
      display: 'flex',
      ...cssVendorPrefix('alignItems', 'center'),
      ...cssVendorPrefix('justifyContent', 'center'),
    } : {};

    const viewStyle = {
      height: '100%',
      width: '100%',
      ...flexStyle,
      ...cssVendorPrefix('transformStyle', 'preserve-3d'),
      ...style,
    };

    return (
      <div className={cx('View', className)} style={viewStyle} {...rest}>
        {children}
      </div>
    );
  }
}

export default View;
