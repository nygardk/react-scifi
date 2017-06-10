import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class GradientBackground extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    endColor: PropTypes.string.isRequired,
    startColor: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['linear', 'radial']),
  }

  static defaultProps = {
    type: 'radial',
  }

  render() {
    const {
      children,
      className,
      endColor,
      startColor,
      style,
      type,
      ...rest
    } = this.props;

    if (type === 'linear') {
      /* eslint-disable no-console */
      console.warn('WARNING: linear gradient background not yet supported!');
      /* eslint-enable no-console */
    }

    const GradientBackgroundStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `radial-gradient(100% 50%, ${startColor}, ${endColor} 100%)`,
    };

    const maxSize = {
      height: '100%',
      width: '100%',
    };

    return (
      <div
        className={(cx('GradientBackground', className))}
        style={{
          ...maxSize,
          ...style,
          ...GradientBackgroundStyle,
        }}
        {...rest}
      >
        <div style={maxSize}>
          {children}
        </div>
      </div>
    );
  }
}

export default GradientBackground;
