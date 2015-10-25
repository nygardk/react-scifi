import React from 'react';

const GradientBackground = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    endColor: React.PropTypes.string.isRequired,
    startColor: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      endColor,
      startColor,
      style,
    } = this.props;

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
      <div className="GradientBackground" style={{
        ...maxSize,
        ...style,
        ...GradientBackgroundStyle,
      }}>
        <div style={maxSize}>
          {children}
        </div>
      </div>
    );
  },
});

export default GradientBackground;
