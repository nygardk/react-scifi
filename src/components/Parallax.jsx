import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import times from 'lodash.times';

import View from './View';
import TiltPlane from './TiltPlane';
import Translate from './Translate';

class Parallax extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]),
    className: PropTypes.string,
    count: PropTypes.number,
    distance: PropTypes.number,
    style: PropTypes.object,
  }

  static defaultProps = {
    count: 10,
    distance: -15,
  }

  render() {
    const {
      children,
      className,
      count,
      distance,
      style,
      ...rest
    } = this.props;

    return (
      <View
        className={cx('Parallax', className)}
        style={style}
        {...rest}
      >
        <TiltPlane style={{ position: 'relative' }}>
          {times(count, index => (
            <Translate
              z={index * distance}
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              {typeof children === 'function'
                ? children(index)
                : children}
            </Translate>
          ))}
        </TiltPlane>
      </View>
    );
  }
}

export default Parallax;
