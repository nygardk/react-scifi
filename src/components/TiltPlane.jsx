import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import View from 'View';
import { cssVendorPrefix } from 'utils';

const TiltPlane = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    perspective: React.PropTypes.number,
    style: React.PropTypes.object,
    tiltX: React.PropTypes.number, /* deg */
    tiltY: React.PropTypes.number, /* deg */
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      perspective: 500,
      tiltX: 0,
      tiltY: 0,
    };
  },

  render() {
    const {
      children,
      perspective,
      style,
      tiltX,
      tiltY,
    } = this.props;

    const tiltPlaneStyle = {
      height: '100%',
      width: '100%',
      perspective: perspective,
      perspectiveOrigin: '50% 50%',
      ...cssVendorPrefix('transform', `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`),
      ...cssVendorPrefix('transformStyle', 'preserve-3d'),
    };

    return (
      <View {...this.props}
        className="TiltPlane"
        style={{...tiltPlaneStyle, ...style}}>
        {children}
      </View>
    );
  },
});

export default TiltPlane;
