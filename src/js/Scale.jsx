import React from 'react';

import { cssVendorPrefix } from 'utils';

const Scale = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    scale: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      scale,
      style,
    } = this.props;

    const scaleStyle = {
      width: '100%',
      height: '100%',
      ...cssVendorPrefix('transform', `scale(${scale})`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <div className="Scale" style={{...scaleStyle, ...style}}>
        {children}
      </div>
    );
  },
});

export default Scale;
