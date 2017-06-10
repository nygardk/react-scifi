import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import View from './View';

class Translucent extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    opacity: PropTypes.number,
    style: PropTypes.object,
  }

  render() {
    const {
      children,
      className,
      opacity,
      style,
      ...rest
    } = this.props;

    const translucentStyle = {
      height: '100%',
      width: '100%',
      opacity,
    };

    return (
      <View
        className={cx('Translucent', className)}
        style={{ ...translucentStyle, ...style }}
        {...rest}
      >
        {children}
      </View>
    );
  }
}

export default Translucent;
