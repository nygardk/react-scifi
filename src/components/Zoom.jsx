import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';

import View from './View';
import Scale from './Scale';

class Zoom extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    damping: PropTypes.number,
    show: PropTypes.bool.isRequired,
    stifness: PropTypes.number,
    style: PropTypes.object,
  }

  static defaultProps = {
    stifness: 170,
    damping: 26,
  }

  render() {
    const {
      children,
      className,
      damping,
      show,
      stifness,
      style,
      ...rest
    } = this.props;

    return (
      <View
        className={cx('Zoom', className)}
        style={style}
        {...rest}
      >
        <Motion
          defaultStyle={{ zoom: 0 }}
          style={{ zoom: spring(show ? 1 : 0, [stifness, damping]) }}
        >
          {value => (
            <Scale scale={parseFloat(value.zoom.toFixed(2))}>
              {children}
            </Scale>
          )}
        </Motion>
      </View>
    );
  }
}

export default Zoom;
