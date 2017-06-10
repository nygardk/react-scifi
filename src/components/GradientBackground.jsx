import React from 'react';

const GradientBackground = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    endColor: React.PropTypes.string.isRequired,
    startColor: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    type: React.PropTypes.oneOf(['linear', 'radial']),
  },

  getDefaultProps() {
    return {
      type: 'radial',
    };
  },

  render() {
    const {
      children,
      endColor,
      startColor,
      style,
      type,
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
        className="GradientBackground"
        style={{
          ...maxSize,
          ...style,
          ...GradientBackgroundStyle,
        }}
      >
        <div style={maxSize}>
          {children}
        </div>
      </div>
    );
  },
});

export default GradientBackground;
