import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import View from 'View';
import { cssVendorPrefix } from 'utils';

const Scale = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    scale: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  mixins: [PureRenderMixin],

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
      <View
        {...this.props}
        className="Scale"
        style={{ ...scaleStyle, ...style }}
      >
        {children}
      </View>
    );
  },
});

export default Scale;
