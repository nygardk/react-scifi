import React from 'react';

import View from 'View';
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
      ...cssVendorPrefix('transform', `scale(${scale})`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <View className="Scale" style={{...scaleStyle, ...style}}>
        {children}
      </View>
    );
  },
});

export default Scale;
