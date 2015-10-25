import React from 'react';

import View from 'View';
import { cssVendorPrefix } from 'utils';
import 'Rotator.styl';

const Rotator = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    spinDuration: React.PropTypes.number, // ms
    spinDirection: React.PropTypes.oneOf(['cw', 'ccw']),
    style: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      spinDirection: 'cw',
    };
  },

  render() {
    const {
      children,
      spinDirection,
      spinDuration,
      style,
    } = this.props;

    const rotationKeyrames = spinDirection === 'cw'
      ? 'rotatorcw'
      : 'rotatorccw';

    const rotatorStyle = {
      ...cssVendorPrefix('animation', `${rotationKeyrames} ${spinDuration}ms linear infinite`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <View className="Rotator" style={{...rotatorStyle, ...style}}>
        {children}
      </View>
    );
  },
});

export default Rotator;
